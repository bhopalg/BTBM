import React from 'react';

import './faq.css';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function FAQ() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div className={isMobile ? 'mobile-faq faq' : 'faq'} id={'faq-section'}>
      <Col className={'faq-title'}>
        <h2>FAQ</h2>
      </Col>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Row className={'faq-card-row'}>
          <Col sm={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>WHAT IS MEE?</span>
                </Accordion.Header>
                <Accordion.Body>
                  A collection of 4000 randomly generated unique NFTs, based on
                  many different assets: Backgrounds, masks, clothing, shoes,
                  etc. Each NFT will have its own set of unique traits... some
                  rarer than others.
                  <br />
                  <br />
                  We aim to build a global successful clothing brand in both
                  web3 & irl, whilst improving the merch space in web3.
                  consistently adding value to our project & holders.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>HOW MUCH DOES EACH MEE COST?</span>
                </Accordion.Header>
                <Accordion.Body>
                  Each MEE NFT will cost 0.055 ETH + gas fees
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>WHEN IS THE OFFICIAL LAUNCH?</span>
                </Accordion.Header>
                <Accordion.Body>
                  MEE NFT will be officially minting on June 8th 2022.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Row className={'faq-card-row card-row-two'}>
          <Col sm={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>WHAT BLOCKCHAIN IS MEE ON?</span>
                </Accordion.Header>
                <Accordion.Body>
                  MEE will be on the Ethereum blockchain.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>WHO ARE YOUR OFFICIAL PARTNERS?</span>
                </Accordion.Header>
                <Accordion.Body>
                  So far we are the official merchandise partners of Llamaverse,
                  Illogics, Squishy Squad & Dobies; with more official partners
                  set to be announced post mint.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </AnimationOnScroll>
    </div>
  );
}

export default FAQ;
