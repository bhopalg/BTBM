import React from 'react';

import './merch.css';
import { Col, Row, Container } from 'react-bootstrap';
import characters from '../../assets/images/characters.png';
import { useMediaQuery } from 'react-responsive';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Merch() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={1}>
      <Container
        className={isMobile ? 'mobile-merch-container' : 'merch-container'}
      >
        <Row>
          <Col xs={12}>
            <h2 className={'merch-title'}>OUR OFFICIAL MERCHANDISE PARTNERS</h2>
          </Col>
          <Col xs={12}>
            <img
              alt="characters"
              src={characters}
              className="d-inline-block characters-image"
            />{' '}
          </Col>
        </Row>
      </Container>
    </AnimationOnScroll>
  );
}

export default Merch;
