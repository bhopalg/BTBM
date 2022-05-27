import React from "react";

import './homepage.css';
import Section1Image from '../assets/images/homepage-section-1.png';
import {Button, Col, Row} from "react-bootstrap";
import Mask from '../assets/images/mask.png';
import MaskLeft from '../assets/images/mask-left.png';
import {useMediaQuery} from "react-responsive";
import Merch from './merch/merch';
import Brands from './brands/brands';
import OurMission from './our-mission/our-mission';
import Video from './video/video';


function Homepage() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <div className={isMobile ? 'mobile-homepage-container homepage-container' : 'homepage-container'}>
            <img
                alt="Mask Image"
                src={Mask}
                className="d-inline-block mask mask-right"
            />{' '}
            <img
                alt="Mask Image"
                src={MaskLeft}
                className="d-inline-block mask mask-left"
            />{' '}
            <Row className={'section-one'}>
                <Col sm={12} md={5} className={'section-one-column-one'}>
                    <img
                        alt="Section 1 Image"
                        src={Section1Image}
                        className="d-inline-block section-one-image"
                    />{' '}
                </Col>
                <Col sm={5} xs={12} className={'section-one-column-two'}>
                    <Row>
                        <Col xs={12}>
                            <h2>MEE NFT</h2>
                        </Col>
                        <Col xs={12}>
                            <p>
                                Born To Be Me was a Web2 clothing brand that entered into the NFT space to fulfill one of the spaces most asked for & sought after utilities - merchandise.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Button className={'mint-button'} variant="outline-dark">MINT</Button>
                </Col>
            </Row>
            <Merch/>
            <Brands/>
            <Video/>
            <OurMission/>
        </div>
    );
}

export default Homepage;