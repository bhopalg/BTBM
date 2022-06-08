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
  const[amountChose,setAmountChose] = useState<any>(1);
  const [maxQuantity, setMaxQuantity] = useState<number>(1);
  const [openErrorSnackbar] = useSnackbar(errorSnackBar);
  const [openSuccessSnackBar] = useSnackbar(successSnackBar);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const[showAlreadyMinted,setShowAlreadyMinted] = useState(false);
  const[isWl,setIsWl] = useState(true);
  const[notEnoughFunds,setNotEnoughFunds] = useState(false);
  

  useEffect(() => {
    setUpCounter();
    const interval = setInterval(() => {
      setUpCounter();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);


  // @ts-ignore
    async function incrementAmountChose() {
      if(amountChose == maxQuantity){
        return
      }

      await setAmountChose(amountChose +1);

    }


  async function incrementAmountChosePublic() {
    if(amountChose == 10){
      return
    }

    await setAmountChose(amountChose +1);

  }

  async function publicMint(mintAmount: any){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _signer = provider.getSigner();
    const address = await _signer.getAddress();


    // @ts-ignore
    const userBalance = await provider.getBalance(address);
    if(Number(userBalance) < (.001 * (10**18) * amountChose)){
      setNotEnoughFunds(true);
      return;
    }
    const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, _signer);
    await contract.publicMint(amountChose,{value:ethers.utils.parseEther(`${amountChose * .055}`)});
  }


    // @ts-ignore
   async function decrementAmountChose(){
     if(amountChose <=1){
       return
     }

    await  setAmountChose(amountChose -1);
    }

  // @ts-ignore
  async function decrementAmountChosePublic(){
    if(amountChose <=1){
      return
    }

    await  setAmountChose(amountChose -1);
  }

    async function whitelistMint(mintAmount:any) {
     



      

      try {
        const preSaleList = PreSaleList as { [key: string]: PreSale };


        //@ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //@ts-ignore
        const userBalance = await provider.getBalance(props.account);
        if(parseInt(userBalance.toString()) < (.055 * (10**18) * amountChose)){
          setNotEnoughFunds(true);
          return;
        } 

          //@ts-ignore
        const preSaleData = preSaleList[props.account];

      
        if (!preSaleData) {
          setIsWl(false);
          return;
        }

        const signature = preSaleData.signature;
        const max = preSaleData.max;

        //@ts-ignore
        //@ts-ignore
    



        const signer = provider.getSigner();
        const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);



        const didMint = await contract.tokensMinted(props.account) > 0 ? true : false
        if(didMint == true) {
          setShowAlreadyMinted(true);
          return;

        }


        console.log(amountChose,max,signature);
        await contract.whitelistMint(amountChose,max,signature,{value: ethers.utils.parseEther(`${amountChose * .055}`)});
    }
    catch(err){
      console.log(err)
    }
  }


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
      const wlSaleStarted = true

      if (wlSaleStarted || publicSaleStarted) {
        setMintButtonState(
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip">Just hit mint</Tooltip>}
          >
                <span className="d-inline-block mint-page-button-span">
                  <Button
                    onClick={() => {
                      // //handleMint(amountChose);
                      whitelistMint(amountChose);
                    }}
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
    // if (quantity === maxQuantity) {
    //   return;
    // }

    setQuantity(quantity + 1);
  }

  function decrementMintAmount() {
    // if (quantity === 1) return;

    setQuantity(quantity - 1);
  }

  async function handleMint(mintAmount:any) {
    console.log('quantity inside function =', mintAmount)
    if (window.ethereum && props.account) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(BTBM_ADDRESS, BTBM, signer);

        //e.preventDefault();
        const wlSaleStarted = true
        const publicSaleStarted = await contract.publicStarted();
        const mintEtherPrice: BigNumber = await contract.price();

        if (publicSaleStarted) {
          const amountMinted = await contract.publicTokensMinted(props.account);

          if (amountMinted === MAX_PUBLIC_QUANTITY) {
            openErrorSnackbar('MAX MINTED');
            return;
          }

          const value: BigNumber = mintEtherPrice.mul(mintAmount);
          const balance: BigNumber = await provider.getBalance(props.account);

          if (balance.lt(value)) {
            openErrorSnackbar('INSUFFICIENT WALLET BALANCE');
            return;
          }

          showSpinner = true;
          await contract.publicMint(mintAmount, {
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

          const value: BigNumber = MINT_PRICE_ETHER.mul(mintAmount);
          const balance: BigNumber = await provider.getBalance(props.account);

          if (balance.lt(value)) {
            openErrorSnackbar('INSUFFICIENT WALLET BALANCE');
            return;
          }
          showSpinner = true;
          await contract.whitelistMint(amountChose, max, signature, {
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
            <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',cursor:'pointer' }}>
            <p   onClick={() => decrementAmountChosePublic()} style={{display: 'inline-block', fontSize:'4rem',padding:'0 30px' , margin:'auto 0',cursor:'pointer'}}>-</p>
            <Col xs={6}>
                  <Form.Control
                    type="number"
                    min={1}
                    max={maxQuantity}
                    aria-describedby="amount"
                    value={amountChose}
                    readOnly={true}
                  />
                </Col>            <p onClick={() => incrementAmountChosePublic()} style={{display: 'inline-block', fontSize:'4rem', padding:'0 30px' , margin:'auto 0'}}>+</p>
              </div>
          
        
            <Col xs={12}>
              <Row className={'mint-input-section'}>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-left'}
                >
                  {/* <button
                    className={'mint-amount-buttons'}
                    onClick={async () => {await decrementAmountChose(); console.log(amountChose)}}
                    //disabled={quantity === 1}
                  >
                    <FontAwesomeIcon icon={faSubtract} />
                  </button> */}
                </Col>
              {notEnoughFunds && <h1>Insufficient Balance</h1>}
               {showAlreadyMinted && <h1>Already Minted On WL</h1>}
               {!isWl && <h1>Not on Whitelist</h1>}
                <button style={{fontSize:'2rem'}} onClick={()=>publicMint(amountChose)}>MINT</button>
              
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-right'}
                >
                  {/* <button
                    className={'mint-amount-buttons'}
                    onClick={async () => {await incrementAmountChose(); console.log(amountChose)}}
                    //disabled={quantity === maxQuantity}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button> */}
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                {/* <Col>
                  {mintButtonState}
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Mint;
