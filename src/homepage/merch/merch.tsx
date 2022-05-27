import React from "react";

import './merch.css';
import {Col, Row, Container} from "react-bootstrap";
import characters from "../../assets/images/characters.png";


function Merch() {
    return (
        <Container className={'merch-container'}>
            <Row>
                <Col xs={12}>
                    <h2 className={'merch-title'}>OUR OFFICIAL MERCHANDISE PARTNERS</h2>
                </Col>
                <Col xs={12}>
                    <img
                        alt="characters Image"
                        src={characters}
                        className="d-inline-block characters-image"
                    />{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default Merch;