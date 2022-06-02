import React from 'react';

import './merch.css';
import { Col, Row, Container } from 'react-bootstrap';
import characters from '../../assets/images/characters.png';
import { useMediaQuery } from 'react-responsive';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Merch() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });

  let containerClassName = '';
  if (isMobile) {
    containerClassName = 'mobile-merch-container';
  } else if (isTablet) {
    containerClassName = 'tablet-merch-container';
  } else {
    containerClassName = 'merch-container';
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={1}>
      <Container className={containerClassName}>
        <Row>
          <Col xs={12} className={'merch-title-container'}>
            <h2 className={'merch-title'}>OUR OFFICIAL MERCHANDISE PARTNERS</h2>
          </Col>
          <Col xs={12} className={'merch-image-container'}>
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
