import React from 'react';
import ReactPlayer from 'react-player';

import './video.css';
import { Col, Row, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Video() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 576px) and (max-width: 1224px)' })

  let containerClassName = '';
  if (isMobile) {
    containerClassName = 'mobile-video-container';
  } else if (isTablet) {
    containerClassName = 'tablet-video-container';
  }
  else {
    containerClassName = 'video-container';
  }

  return (
    <Container
      className={containerClassName}
      id={'video-section'}
    >
      <Row>
        <Col style={{ overflow: 'hidden' }} className={'video-row'}>
          <ReactPlayer
            url="https://vimeo.com/713864269"

            /*TODO change this back to true for production*/
            playing={false}
            width={isMobile ? 'auto' : '1190px'}
            height={isMobile ? 'auto' : '658px'}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
