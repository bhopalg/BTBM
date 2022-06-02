import React from 'react';

import './our-mission.css';
import { Col, Row } from 'react-bootstrap';
import OutMissionImage from '../../assets/images/our-mission.png';
import Mask from '../../assets/images/mask-two.png';

import { useMediaQuery } from 'react-responsive';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function OurMission() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 576px) and (max-width: 1224px)',
  });

  let containerClassName = '';
  if (isMobile) {
    containerClassName = 'mobile-our-mission-row our-mission-row';
  } else if (isTablet) {
    containerClassName = 'tablet-our-mission-row our-mission-row';
  } else {
    containerClassName = 'our-mission-row';
  }

  return (
    <div className={containerClassName} id={'our-team-section'}>
      <img
        alt="Mask"
        src={Mask}
        className="d-inline-block our-mission-mark-image"
      />{' '}
      <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={1}>
        <Col sm={12}>
          <h2 className={'our-mission-title'}>OUR MISSION</h2>
        </Col>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={1}>
        <Col xs={12} className={'our-mission-content'}>
          <Row>
            <Col sm={12} md={4}>
              <img
                alt="Our Missions"
                src={OutMissionImage}
                className="d-inline-block our-mission-image"
              />{' '}
            </Col>
            <Col sm={12} md={4}>
              <p className={'our-mission-text'}>
                Born To Be Me was a Web2 clothing brand that entered into the
                NFT space to fulfill one of the spaces most asked for & sought
                after utilities - merchandise.
                <br />
                <br />
                Our aim is to get people in the NFT space to want to wear their
                NFT merch, not just because of the clout, but because it’s a
                high quality piece of clothing and is something they would be
                proud to wear and want to wear.
                <br />
                <br />
                MEE NFT aims to become the exclusive clothing collaborators for
                all high quality, long term focused and established nft projects
                and their communities. MEE will offer our partners and our
                community second to none quality, exclusivity, & bespoke designs
                that everyone would be proud to wear.
                <br />
                <br />
                Projects who truly care about their community and strive to be a
                long-term successful & established project are focused on
                quality throughout the project from top to bottom. Merch is
                something that is heavily lacking in quality and opportunities
                for these projects at this moment in time.
                <br />
                <br />
                We plan on changing this. We are determined and driven to create
                long term success and value to MEE NFT and our holders through a
                number of benefits and utilities. Some of our benefits our
                holders can look forward to include a revolutionary way of
                integrating an NFT project into an already existing business
                structure with our revenue share distributions through our LLC.
                Our marketplace (off chain and gas-less) where we will be
                offering ‘traditional’ marketplace features, in addition to
                integrating more unique benefits and opportunities for our
                holders long term such as exclusive clothing drops, physical
                goods and more. At the end of the day, we do clothing; and we
                are striving to find unique ways to incorporate all things
                clothing into our project to benefit our community. Our holders
                can expect first and exclusive access to our limited edition
                clothing drops from not only our web2 but also our web3 brand.
              </p>
            </Col>
          </Row>
        </Col>
      </AnimationOnScroll>
    </div>
  );
}

export default OurMission;
