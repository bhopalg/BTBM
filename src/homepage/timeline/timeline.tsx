import React from "react";

import './timeline.css';
import {Col, Row} from "react-bootstrap";
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {useMediaQuery} from "react-responsive";

function Timeline() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <Row className={'timeline-row'}>
            <Col xs={12}>
                <h2 className={'timeline-title'}>MEE MAP</h2>
            </Col>
            <Col xs={12} className={'timeline-text-container'}>
                <p className={'timeline-text'}>
                    Mee’s are all about creating a strong, supportive and dope community, where people can embrace who they were born to be.
                    <br/>
                    <br/>
                    We are determined to create long term success and value to mee nft and our holders through a number of benefits and utilities.
                </p>
            </Col>
            <Col xs={12}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Col>
        </Row>
    )
}

export default Timeline;