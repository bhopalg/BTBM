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
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BTBM from '../assets/contract/btbm.json';
import PreSaleList from '../assets/presale-list.json';
import { BigNumber, ethers } from 'ethers';
// @ts-ignore
import { useSnackbar } from 'react-simple-snackbar';
import { PreSale } from '../model/model';
import {
  BTBM_ADDRESS,
  MINT_PRICE_ETHER,
  MINUTE_MS,
  WL_SALE_DATE,
} from '../shared/variables';

interface Props {
  account: string | null;
  setAccount: Dispatch<SetStateAction<string | null>>;
}

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
  const [mintButtonEnabled, setMintButtonEnabled] = useState(false);
  const [typeOfSale, setTypeOfSale] = useState<'wl' | 'public'>('wl');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date().getTime();
      if (
        currentDateTime >= WL_SALE_DATE.START.getTime() &&
        currentDateTime <= WL_SALE_DATE.END.getTime()
      ) {
        setMintButtonEnabled(true);
        setTypeOfSale('wl');
      } else if (currentDateTime > WL_SALE_DATE.END.getTime()) {
        setMintButtonEnabled(true);
        setTypeOfSale('public');
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      if (!props.account) return;
      if (typeOfSale === 'public') {
        setMaxQuantity(5);
        return;
      }
      const paeSaleList = PreSaleList as { [key: string]: PreSale };
      const preSaleData = paeSaleList[props.account];

      if (!preSaleData) {
        return;
      }
      setMaxQuantity(preSaleData.max ?? 1);
    }
  }, [props.account]);

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
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);

      try {
        e.preventDefault();

        let max = 1;
        let signature = null;
        if (typeOfSale === 'wl') {
          const preSaleList = PreSaleList as { [key: string]: PreSale };
          const preSaleData = preSaleList[props.account];

          if (!preSaleData) return;

          signature = preSaleData.signature;
          max = preSaleData.max ?? 1;
        } else if (typeOfSale === 'public') {
          max = 5;
        } else {
          return;
        }

        const amountMinted: BigNumber = await contract.tokensMinted(
          props.account,
        );
        if (amountMinted.toNumber() === max) {
          openErrorSnackbar('MAX MINTED');
          return;
        }

        const value: BigNumber = MINT_PRICE_ETHER.mul(quantity);
        const balance: BigNumber = await provider.getBalance(props.account);

        if (balance.toNumber() < value.toNumber()) {
          openErrorSnackbar('INSUFFICIENT WALLET BALANCE');
          return;
        }

        showSpinner = true;

        if (typeOfSale === 'wl') {
          await contract.mint(quantity, max, signature, {
            value,
          });
        } else {
          await contract.mint(quantity, max, signature, {
            value,
          });
        }
        openSuccessSnackBar('MINT SUCCESSFUL! WELCOME TO THE MEE FAMILY');
        showSpinner = false;
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
                    <FontAwesomeIcon icon={faArrowLeft} />
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
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col>
                  {!mintButtonEnabled ? (
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-disabled">Mint not live</Tooltip>
                      }
                    >
                      <span className="d-inline-block mint-page-button-span">
                        <Button
                          onClick={(e) => handleMint(e)}
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
                  ) : (
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
                  )}
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
