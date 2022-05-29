import React, { useState } from 'react';

import './homepage.css';
import Section1Image from '../assets/images/homepage-section-1.png';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
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

import { fadeIn, merge, slideInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

function Homepage() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const fadeInStyle = StyleSheet.create({
    bounce: {
      animationName: merge(fadeIn, slideInLeft),
      animationDuration: '2s',
    },
  });

  return (
    <div
      className={
        isMobile
          ? 'mobile-homepage-container homepage-container'
          : 'homepage-container'
      }
      id={'main-section'}
    >
      <img
        alt="Mask Image"
        src={Mask}
        className="d-inline-block mask mask-right"
      />
      <img
        alt="Mask Image"
        src={MaskLeft}
        className="d-inline-block mask mask-left"
      />
      <Row className={'section-one ' + css(fadeInStyle.bounce)}>
        <Col sm={12} md={5} className={'section-one-column-one'}>
          <img
            alt="Section 1 Image"
            src={Section1Image}
            className="d-inline-block section-one-image"
          />
        </Col>
        <Col sm={12} md={5} className={'section-one-column-two'}>
          <Row>
            <Col xs={12}>
              <h2>MEE NFT</h2>
            </Col>
            <Col xs={12}>
              <p>
                Born To Be Me was a Web2 clothing brand that entered into the
                NFT space to fulfill one of the spaces most asked for & sought
                after utilities - merchandise.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Button disabled={true} className={'mint-button'} variant="outline-dark" href={'/mint'}>
            MINT
          </Button>
        </Col>
      </Row>
      <Merch />
      <Brands />
      <Video />
      <OurMission />
      <Timeline />
      <MeetTeam />
      <FAQ />
    </div>
  );
}

export default Homepage;
