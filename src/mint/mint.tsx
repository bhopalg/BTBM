import React, { useState } from 'react';
import './mint.css';
import { useMediaQuery } from 'react-responsive';
import { css, StyleSheet } from 'aphrodite';
import { Col, Form, Row } from 'react-bootstrap';
import Section1Image from '../assets/images/homepage-section-1.png';
import { fadeIn, merge, slideInLeft } from 'react-animations';
// import { ethers } from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Mint() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const [mintAmount, setMintAmount] = useState(1);

  const fadeInStyle = StyleSheet.create({
    bounce: {
      animationName: merge(fadeIn, slideInLeft),
      animationDuration: '2s',
    },
  });

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

  return (
    <div
      className={
        isMobile ? 'mobile-mint-container mint-container' : 'mint-container'
      }
    >
      <Row className={'section-one ' + css(fadeInStyle.bounce)}>
        <Col sm={12} md={5} className={'section-one-column-one'}>
          <img
            alt="Section 1"
            src={Section1Image}
            className="d-inline-block section-one-image"
          />
        </Col>
        <Col sm={12} md={5} className={'section-one-column-two'}>
          <Row className={'mint-input-container'}>
            <Col sm={12} md={2} className={'mint-col-one'}>
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
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Mint;
