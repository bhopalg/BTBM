import React from "react";

import './our-mission.css';
import {Col, Row} from "react-bootstrap";
import OutMissionImage from '../../assets/images/our-mission.png';

function OurMission() {
    return (
        <Row>
            <Col sm={12} md={6}>
                <img
                    alt="Our Missions Image"
                    src={OutMissionImage}
                    className="d-inline-block our-mission-image"
                />{' '}`
            </Col>
            <Col sm={12} md={6}></Col>
        </Row>
    );
}

export default OurMission;

