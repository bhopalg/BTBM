import React from "react";

import './footer.css';
import {Row, Col} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import instagram from '../../assets/socials/instagram.svg';
import twitter from '../../assets/socials/twitter.svg';
import discord from '../../assets/socials/discord.svg';

function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <div className={isMobile ? 'mobile-footer footer' : 'footer'}>
            <Row>
                <Col xs={12}>
                    <div className="footer-socials">
                        <a href={'https://www.instagram.com/borntobemebrand/'} target={'_blank'} className={'instagram'}>
                            <img
                                alt="Instagram link"
                                src={instagram}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                        <a href={'https://twitter.com/BornToBeMeBrand'} target={'_blank'} className={'twitter'}>
                            <img
                                alt="Twitter link"
                                src={twitter}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                        <a href={'https://discord.gg/wA9GPa5En4'} target={'_blank'} className={'discord'}>
                            <img
                                alt="Discord link"
                                src={discord}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                    </div>
                </Col>
                <Col xs={12} className={'footer-copyright-text'}>
                    <p>Copyright, BTBM. All rights reserved.</p>
                </Col>
            </Row>

        </div>
    );
}

export default Footer;