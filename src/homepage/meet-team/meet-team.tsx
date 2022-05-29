import React from 'react';

import './meet-team.css';
import { Card, Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

import ArtistImage from '../../assets/team/artist.png';
import FounderImage from '../../assets/team/founder.png';
import Founder2Image from '../../assets/team/founder-two.png';
import HOMImage from '../../assets/team/hom.png';
import SGOImage from '../../assets/team/sgo.png';
import DevImage from '../../assets/team/disc_doc_logo_dark.png';

import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function MeetTeam() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div
      className={isMobile ? 'mobile-meet-team meet-team' : 'meet-team'}
      id={'meet-team-section'}
    >
      <Row>
        <Col className={'meet-team-title'}>
          <h2>THE MEET TEAM</h2>
        </Col>
      </Row>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Row className={'meet-team-card-row'}>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={FounderImage}
                    alt={'Founder'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>DANIEL T</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>FOUNDER</Card.Title>
                    <Card.Text>
                      Daniel has a passion for fashion and streetwear, having
                      created the web2 Born To Be Me brand & has experience &
                      connections with high quality manufacturers for apparel.
                      <br />
                      <br />
                      Played Division 1 football for 5 years & had pro day in
                      March of 2020; The day after - Covid-19 shut everything
                      down. Shortly afterwards, B2BM was born!
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={Founder2Image}
                    alt={'Founder'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>BRAXTON L</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>FOUNDER</Card.Title>
                    <Card.Text>
                      For the last 8 years, Braxton has been blessed to play
                      professional baseball for a living. currently a Free
                      Agent, and with his free time found his passion for NFT’s.
                      <br />
                      <br />
                      In crypto since 2017, eventually leading to NFT’s in
                      August 2021. Has a marketing mindset and has a passion for
                      all things creativity.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={HOMImage}
                    alt={'Head of marketing'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>ALEX C</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>HEAD OF MARKETING</Card.Title>
                    <Card.Text>
                      Alex is a full time NFT marketer, previously working in
                      marketing in Web2 for the past 6 years after graduating
                      from University with a degree in Advertising & Marketing.
                      <br />
                      <br />
                      Been in the NFT space since September 2021 and has a
                      passion for nft’s, web3 and all things tech. previously
                      worked as a close up professional magician.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
        <Row className={'meet-team-card-row'}>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={SGOImage}
                    alt={'Senior governance officer'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>PETER C</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>SENIOR GOVERNANCE OFFICER</Card.Title>
                    <Card.Text>
                      Peter is a technology entrepreneur & investor with more
                      than 12 years of experience in the technology and emerging
                      markets. specializing in corporate governance,
                      fundraising, and the realization ofoperational
                      efficiencies, organization-wide.
                      <br />
                      <br />
                      His focus has helped develop multiple start-up companies,
                      including a metaverse/AR social platform, a medical
                      devices company and an alternative health research
                      facility.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={DevImage}
                    alt={'Dev'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>DISCORD DOC</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>Discord Doc</Card.Title>
                    <Card.Text>
                      Discord Doc has been helping build in Web3 for 3+ years
                      and been buying the dip since 2015.
                      <br />
                      <br />
                      Discord Doc is part of the Dev team over at Illogics (One
                      of our Official Merch Partners). The Illogics Dev Team are
                      working with us to dev everything MEE. From the website
                      you’re on right now, to our smart contract, marketplace &
                      token; this is all the work of Overnight and the Illogics
                      Team!
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card>
              <Row>
                <Col sm={12} md={5}>
                  <Card.Img
                    src={ArtistImage}
                    alt={'Artist'}
                    className={'team-image'}
                  />
                  <div className={'team-member-name'}>
                    <p>ALIENS GRAPHIX</p>
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <Card.Body>
                    <Card.Title>ARTIST</Card.Title>
                    <Card.Text>
                      Aliens is the artist behind MEE and is a master at turning
                      ideas, concepts and visions into reality.
                      <br />
                      <br />
                      His entry into Web3 came during the pandemic, after
                      spending too much time on clubhouse. Has a great passion
                      for web3, NFT’s and advancing the metaverse.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </AnimationOnScroll>
    </div>
  );
}

export default MeetTeam;
