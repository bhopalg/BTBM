import React from "react";
import ReactPlayer from 'react-player'

import './video.css';
import {Col, Row, Container} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

function Video() {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <Container className={isMobile ? 'mobile-video-container video-container' : 'video-container'}>
            <Row>
                <Col style={{ overflow: 'hidden' }} className={'video-row'}>
                    <ReactPlayer url='https://vimeo.com/713864269'
                                 width={isMobile ? 'auto' : '1190px'}
                                 height={isMobile ? 'auto' : '658px'} />
                </Col>
            </Row>
        </Container>

    );
}

export default Video;