import React, { useState } from 'react';
import './wl-checker.css';
import { useMediaQuery } from 'react-responsive';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Section1Image from '../assets/images/homepage-section-1.png';
import PreSaleList from '../assets/presale-list.json';
import { PreSale } from '../model/model';

function WLChecker() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });
  const [wallet, setWallet] = useState<string | null>(null);
  const [isWL, setIsWL] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);
  const [showCheckerText, setShowCheckerText] = useState(false);

  let containerClass = '';
  if (isMobile) {
    containerClass = 'mobile-wl-checker-container wl-checker';
  } else if (isTablet) {
    containerClass = 'tablet-wl-checker wl-checker';
  } else {
    containerClass = 'wl-checker';
  }

  function checkWL() {
    if (!wallet) return;

    const preSaleList = PreSaleList as { [key: string]: PreSale };
    const preSaleData = preSaleList[wallet];

    if (!preSaleData) {
      setShowCheckerText(true);
      setIsWL(false);
      return;
    }

    setShowCheckerText(true);
    setIsWL(true);
    setMaxQuantity(preSaleData.max ?? 0);
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
        <Col sm={12} md={3} className={'wl-checker-section'}>
          <Row>
            <Col xs={12}>
              {!showCheckerText ? null : isWL ? (
                <div>
                  <h3 className={'wl-checker-title wl-successful'}>
                    CONGRATULATIONS! YOU ARE WHITELISTED
                  </h3>
                  <p className={'wl-checker-text wl-successful'}>
                    Address - {wallet}
                    <br />
                    Max Mint Amount - {maxQuantity}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className={'wl-checker-title wl-unsuccessful'}>
                    YOUR WALLET IS NOT ON THE WL!
                  </h3>
                  <p className={'wl-checker-text wl-unsuccessful'}>
                    Please open a support ticket in the discord if you need
                    help
                  </p>
                </div>
              )}
            </Col>
            <Col xs={12}>
              <Form className={'wl-checker-form'}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="copy ETH wallet address"
                    onChange={(e) => setWallet(e.target.value)}
                  />
                </Form.Group>
                <Button className={'wl-checker-button'} onClick={checkWL}>
                  CHECK
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WLChecker;
