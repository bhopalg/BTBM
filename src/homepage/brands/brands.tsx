import React from "react";

import './brands.css';
import {Row, Col} from "react-bootstrap";
import llamaverse from "../../assets/partners/llamaverse.png";
import illogics from "../../assets/partners/illogics.png";
import squishySquad from "../../assets/partners/squishy-squad.png";
import dobies from "../../assets/partners/dobies.png";
import {useMediaQuery} from "react-responsive";
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Brands() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
            <Row className={isMobile ? 'mobile-partners-row partners-row' : 'partners-row'} id={'brands-section'}>
                <Col className={'partners-col'} sm={4} md={2}>
                    <img
                        alt="llamaverse Image"
                        src={llamaverse}
                        className="d-inline-block partners llamaverse"
                    />{' '}
                </Col>
                <Col className={'partners-col'} sm={4} md={2}>
                    <img
                        alt="illogics Image"
                        src={illogics}
                        className="d-inline-block partners illogics"
                    />{' '}
                </Col>
                <Col className={'partners-col'} sm={4} md={2}>
                    <img
                        alt="squishySquad Image"
                        src={squishySquad}
                        className="d-inline-block partners squishy-squad"
                    />{' '}
                </Col>
                <Col className={'partners-col'} sm={4} md={2}>
                    <img
                        alt="dobies Image"
                        src={dobies}
                        className="d-inline-block partners dobies"
                    />{' '}
                </Col>
            </Row>
        </AnimationOnScroll>
    );
}

export default Brands;