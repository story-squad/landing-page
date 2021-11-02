import React from 'react';
import { Paragraph } from '../../atoms';
import './styles/index.scss';

export default function OurMissionText(): React.ReactElement {
  return (
    <div className="our-mission-content">
      <div>
        <h2>Our Mission</h2>
        <Paragraph>Human connection through creative expression.</Paragraph>
      </div>
      <div>
        <h2>Who&apos;s it for?</h2>
        <Paragraph>8-12 year olds & adults young at heart!</Paragraph>
      </div>
    </div>
  );
}
