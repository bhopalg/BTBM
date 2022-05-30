import React, { useState } from 'react';
import './mint.css';
import { useMediaQuery } from 'react-responsive';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Section1Image from '../assets/images/homepage-section-1.png';
// import { ethers } from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Mint() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });

  const [mintAmount, setMintAmount] = useState(1);

  function incrementMintAmount() {
    if (mintAmount === 3) {
      return;
    }

    setMintAmount(mintAmount + 1);
  }

  function decrementMintAmount() {
    if (mintAmount === 1) {
      return;
    }

    setMintAmount(mintAmount - 1);
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
    <Container
      className={containerClass}>
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
            <Col xs={12}>
              <Row className={'mint-input-section'}>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-left'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={decrementMintAmount}
                    disabled={mintAmount === 1}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </Col>
                <Col xs={6}>
                  <Form.Control
                    type="number"
                    min="0"
                    max="3"
                    aria-describedby="amount"
                    value={mintAmount}
                  />
                </Col>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-right'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={incrementMintAmount}
                    disabled={mintAmount === 3}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col>
                  <Button
                    disabled={true}
                    className={'mint-button'}
                    variant="outline-dark"
                    href={'/mint'}
                  >
                    MINT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );


  return (
    <div
      className={
        isMobile ? 'mobile-mint-container mint-container' : 'mint-container'
      }
    >
      <Row className={'section-one'}>
        <Col sm={12} md={5} className={'section-one-column-one'}>
          <img
            alt="Section 1"
            src={Section1Image}
            className="d-inline-block section-one-image"
          />
        </Col>
        <Col sm={12} md={5} className={'section-one-column-two'}>
          <Row className={'mint-input-container'}>
            <Col md={5} xs={12} className={'mint-col-one'}>
              <Row>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-left'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={decrementMintAmount}
                    disabled={mintAmount === 1}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </Col>
                <Col xs={8}>
                  <Form.Control
                    type="number"
                    min={0}
                    aria-describedby="amount"
                    value={mintAmount}
                  />
                </Col>
                <Col
                  xs={2}
                  className={'mint-input-arrows mint-input-arrow-right'}
                >
                  <button
                    className={'mint-amount-buttons'}
                    onClick={incrementMintAmount}
                    disabled={mintAmount === 3}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xs={12} className={'mint-col-one-button'}>
              <Row>
                <Col md={4} xs={12}>
                  <Button
                    disabled={true}
                    className={'mint-button'}
                    variant="outline-dark"
                    href={'/mint'}
                  >
                    MINT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Mint;
