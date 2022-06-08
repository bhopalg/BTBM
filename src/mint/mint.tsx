import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './mint.css';
import { useMediaQuery } from 'react-responsive';
import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
} from 'react-bootstrap';
import Section1Image from '../assets/images/homepage-section-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import BTBM from '../assets/contract/btbm.json';
import PreSaleList from '../assets/presale-list.json';
import { BigNumber, ethers } from 'ethers';
// @ts-ignore
import { useSnackbar } from 'react-simple-snackbar';
import { PreSale } from '../model/model';
import {
  BTBM_ADDRESS,
  MAX_PUBLIC_QUANTITY,
  MINT_PRICE_ETHER,
  MINUTE_MS,
} from '../shared/variables';

interface Props {
  account: string | null;
  setAccount: Dispatch<SetStateAction<string | null>>;
}

//   and the tooltip should change to say : please connect wallet
// and when they have connected it should say : mint not live yet
// and if mint is live - should say nothing ; just hit mint

function Mint(props: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });
  let showSpinner = false;

  const errorSnackBar = {
    position: 'center',
    style: {
      backgroundColor: '#8b0000',
      border: '2px solid #8b0000',
      color: 'white',
      fontFamily: 'Bebas Neue, monospace',
      fontSize: '18px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'white',
      fontSize: '16px',
    },
  };

  const successSnackBar = {
    position: 'center',
    style: {
      backgroundColor: '#238b00',
      border: '2px solid #8b0000',
      color: 'white',
      fontFamily: 'Bebas Neue, monospace',
      fontSize: '18px',
      textAlign: 'center',
    },
    closeStyle: {
      color: 'white',
      fontSize: '16px',
    },
  };

  const [quantity, setQuantity] = useState<number>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(1);
  const [openErrorSnackbar] = useSnackbar(errorSnackBar);
  const [openSuccessSnackBar] = useSnackbar(successSnackBar);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);

  useEffect(() => {
    setUpCounter();
    const interval = setInterval(() => {
      setUpCounter();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  async function setUpCounter() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);

    const _totalSupply = await contract.totalSupply();
    const _maxSupply = await contract.maxSupply();
    setMaxSupply(_maxSupply);

    if (_totalSupply < _maxSupply) {
      setTotalSupply(_totalSupply.toNumber());
    }
  }

  const mintButton = <OverlayTrigger
    placement="bottom"
    overlay={
      <Tooltip id="tooltip-disabled">Please Connect Wallet</Tooltip>
    }>
        <span className="d-inline-block mint-page-button-span">
          <Button
            type={'button'}
            disabled={true}
            className={'mint-page-button mint-button'}
            variant="outline-dark"
            style={{ pointerEvents: 'none' }}
          >
            MINT
          </Button>
        </span>
  </OverlayTrigger>;

  const [mintButtonState, setMintButtonState] = useState(mintButton);

  useEffect(() => {
    checkMintStarted();
    const interval = setInterval(() => {
      checkMintStarted();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [props.account]);

  async function checkMintStarted() {
    if (!props.account) {
      setMintButtonState(mintButton);
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);

    if (window.ethereum) {
      const publicSaleStarted = await contract.publicStarted();
      const wlSaleStarted = await contract.presaleStarted();

      if (wlSaleStarted || publicSaleStarted) {
        setMintButtonState(
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip">Just hit mint</Tooltip>}
          >
                <span className="d-inline-block mint-page-button-span">
                  <Button
                    onClick={(e) => handleMint(e)}
                    type={'button'}
                    className={'mint-page-button mint-button'}
                    variant="outline-dark"
                  >
                    MINT
                  </Button>
                </span>
          </OverlayTrigger>
        );

        if (publicSaleStarted) {
          setMaxQuantity(MAX_PUBLIC_QUANTITY);
        } else if (wlSaleStarted) {
          const paeSaleList = PreSaleList as { [key: string]: PreSale };
          const preSaleData = paeSaleList[props.account as string];

          if (!preSaleData) {
            return;
          }
          setMaxQuantity(preSaleData.max ?? 1);
        } else {
          setMaxQuantity(0);
        }
      } else {
        setMintButtonState(
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-disabled">Mint not live yet</Tooltip>
            }>
              <span className="d-inline-block mint-page-button-span">
                <Button
                  type={'button'}
                  disabled={true}
                  className={'mint-page-button mint-button'}
                  variant="outline-dark"
                  style={{ pointerEvents: 'none' }}
                >
                  MINT
                </Button>
              </span>
          </OverlayTrigger>
        );
      }
    }
  }

  function incrementMintAmount() {
    if (quantity === maxQuantity) {
      return;
    }

    setQuantity(quantity + 1);
  }

  function decrementMintAmount() {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  }

  async function handleMint(e: any) {
    if (window.ethereum && props.account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);

        e.preventDefault();
        const wlSaleStarted = await contract.presaleStarted();
        const publicSaleStarted = await contract.publicStarted();
        const mintEtherPrice: BigNumber = await contract.price();

        if (publicSaleStarted) {
          const amountMinted = await contract.publicTokensMinted(props.account);

          if (amountMinted === MAX_PUBLIC_QUANTITY) {
            openErrorSnackbar('MAX MINTED');
            return;
          }

          const value: BigNumber = mintEtherPrice.mul(quantity);
          const balance: BigNumber = await provider.getBalance(props.account);

          if (balance.lt(value)) {
            openErrorSnackbar('INSUFFICIENT WALLET BALANCE');
            return;
          }

          showSpinner = true;

          await contract.publicMint(quantity, {
            value,
          });

          openSuccessSnackBar('MINT INITIATED!');
          showSpinner = false;
        } else if (wlSaleStarted) {
          const preSaleList = PreSaleList as { [key: string]: PreSale };
          const preSaleData = preSaleList[props.account];

          if (!preSaleData) {
            openErrorSnackbar('NOT ONE PRESALE LIST');
            return;
          }

          const signature = preSaleData.signature;
          const max = preSaleData.max ?? 1;

          const amountMinted = await contract.tokensMinted(props.account);

          if (amountMinted === max) {
            openErrorSnackbar('MAX MINTED');
            return;
          }

          const value: BigNumber = MINT_PRICE_ETHER.mul(quantity);
          const balance: BigNumber = await provider.getBalance(props.account);

          if (balance.lt(value)) {
            openErrorSnackbar('INSUFFICIENT WALLET BALANCE');
            return;
          }
          showSpinner = true;
          await contract.whitelistMint(quantity, max, signature, {
            value,
          });
          openSuccessSnackBar('MINT INITIATED!');
          showSpinner = false;
        } else {
          return;
        }
      } catch (e) {
        showSpinner = false;
        // @ts-ignore error is a type of any
        if (e.code === 4001) {
          openErrorSnackbar('USER DENIED TRANSACTION!');
        } else {
          openErrorSnackbar('ERROR MINTING!');
        }
      }
    }
  }

  let containerClass = '';
  if (isMobile) {
    containerClass = 'mobile-mint-container mint-container';
  } else if (isTablet) {
    containerClass = 'tablet-mint-container mint-container';
  } else {
    containerClass = 'mint-container';
  }

  return (
    <Container className={containerClass}>
      <Row>
        <Col sm={12} md={5}>
          <img
            alt="Section 1"
            src={Section1Image}
            className="d-inline-block section-one-image"
          />
        </Col>
        <Col sm={12} md={3} className={'mint-section'}>
          <Row>
            {showSpinner ? (
              <Col xs={12}>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            ) : null}
            <Col xs={12} className={'mint-counter'}>
              {totalSupply} / {maxSupply}
            </Col>
            <Col xs={12}>
              <Row className={'mint-input-section'}>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-left'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={decrementMintAmount}
                    disabled={quantity === 1}
                  >
                    <FontAwesomeIcon icon={faSubtract} />
                  </button>
                </Col>
                <Col xs={6}>
                  <Form.Control
                    type="number"
                    min={1}
                    max={maxQuantity}
                    aria-describedby="amount"
                    value={quantity}
                    readOnly={true}
                  />
                </Col>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-right'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={incrementMintAmount}
                    disabled={quantity === maxQuantity}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col>
                  {mintButtonState}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Mint;
