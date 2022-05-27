import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './header.css';
import instagram from '../assets/socials/instagram.svg';
import twitter from '../assets/socials/twitter.svg';
import discord from '../assets/socials/discord.svg';

function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

    const desktopNav = <Navbar className={'desktop-navbar'} fixed="top">
        <Container>
            <Row>
                <Col sm={3} className={'nav-socials-col'}>
                    <Row className="nav-socials">
                        <Col sm={2}>
                            <a href={'https://www.instagram.com/borntobemebrand/'} target={'_blank'} className={'instagram'}>
                                <img
                                    alt="Instagram link"
                                    src={instagram}
                                    className="d-inline-block social-link"
                                />{' '}
                            </a>
                        </Col>
                        <Col sm={2}>
                            <a href={'https://twitter.com/BornToBeMeBrand'} target={'_blank'} className={'twitter'}>
                                <img
                                    alt="Twitter link"
                                    src={twitter}
                                    className="d-inline-block social-link"
                                />{' '}
                            </a>
                        </Col>
                        <Col sm={2}>
                            <a href={'https://discord.gg/wA9GPa5En4'} target={'_blank'} className={'discord'}>
                                <img
                                    alt="Discord link"
                                    src={discord}
                                    className="d-inline-block social-link"
                                />{' '}
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className={'logo-row'}>
                        <Col xs={12}>
                            <div className={'logo-container'}>
                                <h2 className={'logo-name'}>BORN TO BE ME</h2>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Nav>
                                <Nav.Item>
                                    <AnchorLink href='#our-team-section'>MISSION</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <AnchorLink href='#timeline-section'>MEE MAP</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <AnchorLink href='#meet-team-section'>TEAM</AnchorLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <AnchorLink href='#faq-section'>FAQ</AnchorLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}>
                    <Row>
                        <Col xs={12}>
                            <div className={'wallet-display'}>
                                <p className={'wallet-display-text'}>
                                    <span className={'wallet-connected-dot'}></span>
                                    0x74d...0de5 | 305
                                    <span className={'token-name'}>$mee</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Navbar>;

    const mobileNav = <Navbar bg="light" expand="lg" className={'mobile-navbar'}>
        <Container>
            <Navbar.Brand href="#home" className={'logo-container'}>
                <h2 className={'logo-name'}>BORN TO BE ME</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <AnchorLink href='#our-team-section'>MISSION</AnchorLink>
                    <AnchorLink href='#timeline-section'>MEE MAP</AnchorLink>
                    <AnchorLink href='#meet-team-section'>TEAM</AnchorLink>
                    <AnchorLink href='#faq-section'>FAQ</AnchorLink>
                </Nav>
                <Row className="nav-socials">
                    <Col xs={3}>
                        <a href={'https://www.instagram.com/borntobemebrand/'} target={'_blank'} className={'instagram'}>
                            <img
                                alt="Instagram link"
                                src={instagram}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                    </Col>
                    <Col xs={3}>
                        <a href={'https://twitter.com/BornToBeMeBrand'} target={'_blank'} className={'twitter'}>
                            <img
                                alt="Twitter link"
                                src={twitter}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                    </Col>
                    <Col xs={3}>
                        <a href={'https://discord.gg/wA9GPa5En4'} target={'_blank'} className={'discord'}>
                            <img
                                alt="Discord link"
                                src={discord}
                                className="d-inline-block social-link"
                            />{' '}
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className={'wallet-col'}>
                        <div className={'wallet-display'}>
                            <p className={'wallet-display-text'}>
                                <span className={'wallet-connected-dot'}></span>
                                0x74d...0de5 | 305
                                <span className={'token-name'}>$mee</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    if (isMobile) {
        return (mobileNav);
    } else {
        return (desktopNav);
    }
}

export default Header;