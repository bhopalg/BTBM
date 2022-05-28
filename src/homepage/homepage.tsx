import React, {useState} from "react";

import './homepage.css';
import Section1Image from '../assets/images/homepage-section-1.png';
import {Button, Col, Form, Row} from "react-bootstrap";
import Mask from '../assets/images/mask.png';
import MaskLeft from '../assets/images/mask-left.png';
import {useMediaQuery} from "react-responsive";
import Merch from './merch/merch';
import Brands from './brands/brands';
import OurMission from './our-mission/our-mission';
import Video from './video/video';
import Timeline from './timeline/timeline';
import MeetTeam from './meet-team/meet-team';
import FAQ from './faq/faq';
import Footer from './footer/footer';

import {fadeIn, merge, slideInLeft} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {ethers} from "ethers";

function Homepage() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    const fadeInStyle = StyleSheet.create({
        bounce: {
            animationName: merge(fadeIn, slideInLeft),
            animationDuration: '2s'
        }
    });

    const [mintAmount, setMintAmount] = useState(1);
    const [signer, setSigner] = useState(null);

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
    
    async function test() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        // setSigner(signer)
    }

    test();


    return (
        <div className={isMobile ? 'mobile-homepage-container homepage-container' : 'homepage-container'} id={'main-section'}>
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
            <Row className={'section-one ' + css(fadeInStyle.bounce)}>
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
                    <Row className={'mint-input-container'}>
                        <Col sm={12} md={2}>
                            <Row>
                                <Col xs={2} className={'mint-input-arrows mint-input-arrow-left'}>
                                    <button className={'mint-amount-buttons'} onClick={decrementMintAmount} disabled={mintAmount === 1}>
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
                                <Col xs={2} className={'mint-input-arrows mint-input-arrow-right'}>
                                    <button className={'mint-amount-buttons'} onClick={incrementMintAmount} disabled={mintAmount === 3}>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Button className={'mint-button'} variant="outline-dark">MINT</Button>
                </Col>
            </Row>
            <Merch/>
            <Brands/>
            <Video/>
            <OurMission/>
            <Timeline/>
            <MeetTeam/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Homepage;