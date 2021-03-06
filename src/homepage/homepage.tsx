import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { fadeIn, merge, slideInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import './homepage.css';
import Section1Image from '../assets/images/homepage-section-1.png';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Mask from '../assets/images/mask.png';
import MaskLeft from '../assets/images/mask-left.png';
import { useMediaQuery } from 'react-responsive';
import Merch from './merch/merch';
import Brands from './brands/brands';
import OurMission from './our-mission/our-mission';
import Video from './video/video';
import Timeline from './timeline/timeline';
import MeetTeam from './meet-team/meet-team';
import FAQ from './faq/faq';
import Footer from '../footer/footer';
import { BTBM_ADDRESS, MINUTE_MS, WL_SALE_DATE } from '../shared/variables';
import { ethers } from 'ethers';
import BTBM from '../assets/contract/btbm.json';

interface Props {
  account: string | null;
  setAccount: Dispatch<SetStateAction<string | null>>;
}

function Homepage(props: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });
  const [mintButtonEnabled, setMintButtonEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date().getTime();
      if (currentDateTime >= WL_SALE_DATE.START.getTime()) {
        setMintButtonEnabled(true);
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const fadeInStyle = StyleSheet.create({
    bounce: {
      animationName: merge(fadeIn, slideInLeft),
      animationDuration: '2s',
    },
  });

  const mintButton = <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="tooltip-disabled">Please Connect Wallet</Tooltip>}
  >
              <span className="d-inline-block">
                <Button
                  disabled={true}
                  className={'mint-button'}
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

    const wlSaleStarted = await contract.presaleStarted();
    const publicSaleStarted = await contract.publicStarted();

    if (wlSaleStarted || publicSaleStarted) {
      setMintButtonState(
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip">Click to visit mint page</Tooltip>}
        >
              <span className="d-inline-block">
                <Button
                  className={'mint-button'}
                  variant="outline-dark"
                  href={'/mint'}
                >
                  MINT
                </Button>
              </span>
        </OverlayTrigger>
      );
    } else {
      setMintButtonState(
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-disabled">Mint not live yet</Tooltip>}
        >
              <span className="d-inline-block">
                <Button
                  disabled={true}
                  className={'mint-button'}
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

  let containerClassName = '';
  if (isMobile) {
    containerClassName = 'mobile-homepage-container homepage-container';
  } else if (isTablet) {
    containerClassName = 'table-homepage-container homepage-container';
  } else {
    containerClassName = 'homepage-container';
  }

  return (
    <div className={containerClassName} id={'main-section'}>
      <img alt="Mask" src={Mask} className="d-inline-block mask mask-right" />
      <img
        alt="Mask"
        src={MaskLeft}
        className="d-inline-block mask mask-left"
      />
      <Row className={'section-one ' + css(fadeInStyle.bounce)}>
        <Col sm={12} md={5} className={'section-one-column-one'}>
          <img
            alt="Main"
            src={Section1Image}
            className="d-inline-block section-one-image"
          />
        </Col>
        <Col sm={12} md={5} className={'section-one-column-two'}>
          <Row>
            <Col xs={12} className={'section-one-title'}>
              <h2>MEE NFT</h2>
            </Col>
            <Col xs={12} className={'section-one-text'}>
              <p>
                Born To Be Me was a Web2 clothing brand that entered into the
                NFT space to fulfill one of the spaces most asked for & sought
                after utilities - merchandise.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          {mintButtonState}
        </Col>
      </Row>
      <Merch />
      <Brands />
      <Video />
      <OurMission />
      <Timeline />
      <MeetTeam />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Homepage;
