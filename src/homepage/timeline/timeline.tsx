import React from 'react';

import './timeline.css';
import { Col } from 'react-bootstrap';
// @ts-ignore
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useMediaQuery } from 'react-responsive';
import LaunchDayImage from '../../assets/timeline/launch-day.png';
import FreeMerchDropImage from '../../assets/timeline/free-merch-drop.png';
import PartnersMerchDropImage from '../../assets/timeline/partners-merch-drop.png';
import LoveIsFreeTShirtImage from '../../assets/timeline/love-is-free-t-shirt.png';
import HoodieImage from '../../assets/timeline/hoodie-merch.png';
import MeeTokenImage from '../../assets/timeline/token.png';
import VIPAccessImage from '../../assets/timeline/vip-access.png';
import Giveaway from '../../assets/timeline/giveaway.png';
import Mask from '../../assets/images/mask-two.png';

function Timeline() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  return (
    <div
      className={isMobile ? 'mobile-timeline-row timeline-row' : 'timeline-row'}
      id={'timeline-section'}
    >
      <img
        alt="Mask"
        src={Mask}
        className="d-inline-block timeline-mark-image"
      />
      <img
        alt="Mask"
        src={Mask}
        className="d-inline-block timeline-mark-image-two"
      />
      <Col xs={12}>
        <h2 className={'timeline-title'}>MEE MAP</h2>
      </Col>
      <Col xs={12} className={'timeline-text-container'}>
        <p className={'timeline-text'}>
          Mee’s are all about creating a strong, supportive and dope community,
          where people can embrace who they were born to be.
          <br />
          <br />
          We are determined to create long term success and value to mee nft and
          our holders through a number of benefits and utilities.
        </p>
      </Col>
      <Col xs={12}>
        <VerticalTimeline className={'timeline-container'}>
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-right"
          >
            <div className={'timeline-element-title'}>
              <h3>LAUNCH DAY</h3>
            </div>
            <div className={'timeline-element-text'}>
              <p>
                The beginning of the mee’s journey into web3, as they begin
                their mission to change clothing brands forever.
              </p>
            </div>
            <img
              alt="Launch Day"
              src={LaunchDayImage}
              className="d-inline-block launch-day-image"
            />{' '}
            `
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'left'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-left free-merch-drop"
          >
            <div className={'timeline-element-title free-merch-drop-title'}>
              <h3>FREE MERCH DROP</h3>
            </div>
            <div className={'timeline-element-text free-merch-drop-text'}>
              <p>
                registered holders will recieve a free and exclusive limited
                edition mee clothing drop; manufactured by our high end
                streetwear manufacturer.
              </p>
            </div>
            <img
              alt="Free merch drop"
              src={FreeMerchDropImage}
              className="d-inline-block free-merch-drop-image"
            />{' '}
            `
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-left partners-merch-drop"
          >
            <img
              alt="Partners merch drop"
              src={PartnersMerchDropImage}
              className="d-inline-block partners-merch-drop-image"
            />{' '}
            `
            <div className={'timeline-element-title partners-merch-drop-title'}>
              <h3>OFFICIAL PARTNERS MERCH</h3>
            </div>
            <div
              className={'timeline-element-title partners-merch-drop-title-two'}
            >
              <h3>EXCLUSIVE ACCESS</h3>
            </div>
            <div className={'timeline-element-text partners-merch-drop-text'}>
              <p>
                registered holders will recieve a free and exclusive limited
                edition mee clothing drop; manufactured by our high end
                streetwear manufacturer.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'left'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-right mee-marketing"
          >
            <img
              alt="Love T Shirt"
              src={LoveIsFreeTShirtImage}
              className="d-inline-block mee-marketing-image love-t"
            />{' '}
            <img
              alt="Hoodie"
              src={HoodieImage}
              className="d-inline-block mee-marketing-image hoodie"
            />{' '}
            <div className={'timeline-element-title mee-marketing-title'}>
              <h3>$MEE MARKETPLACE</h3>
            </div>
            <div className={'timeline-element-text mee-marketing-text'}>
              <ul>
                <li>stake your nft’s</li>
                <li>whitelist shop</li>
                <li>purchase raffle tickets</li>
                <li>purchase $mee % boosts</li>
                <li>purchase nft’s</li>
                <li>purchase merch via $mee</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-left mee-token"
          >
            <img
              alt="Mee Token"
              src={MeeTokenImage}
              className="d-inline-block mee-token-image"
            />{' '}
            `
            <div className={'timeline-element-title mee-token-title'}>
              <h3>DISTRIBUTIONAL</h3>
            </div>
            <div className={'timeline-element-title mee-token-title-two'}>
              <h3>REVENUE SHARES</h3>
            </div>
            <div className={'timeline-element-text mee-token-text'}>
              <p>
                you will receive ownership within the born to be me brand in its
                entirety. entitling you to a % Rev share of distributions! As
                the brand grows, we all reap the rewards of our success. (more
                info in our whitepaper){' '}
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'left'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-left vip-access"
          >
            <img
              alt="Vip Access"
              src={VIPAccessImage}
              className="d-inline-block vip-access-image"
            />{' '}
            `
            <div className={'timeline-element-title vip-access-title'}>
              <h3>VIP ACCESS TO ALL</h3>
            </div>
            <div className={'timeline-element-title vip-access-title-two'}>
              <h3>FUTURE CLOTHING DROPS</h3>
            </div>
            <div className={'timeline-element-text vip-access-text'}>
              <p>
                get first exclusive and vip access to all clothing drops before
                anyone else!
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className="vertical-timeline-element--work timeline-vertical-element timeline-left what-else"
          >
            <img
              alt="Giveaway"
              src={Giveaway}
              className="d-inline-block what-else-image"
            />{' '}
            `
            <div className={'what-else-title-container'}>
              <div className={'timeline-element-title what-else-title-two'}>
                <h3>WHAT ELSE FOR MEE’S?</h3>
              </div>
              <div className={'timeline-element-text what-else-text'}>
                <p>
                  Exclusive mee only contests & giveaways. Community clothing
                  design collaborations much more still to come
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Col>
    </div>
  );
}

export default Timeline;
