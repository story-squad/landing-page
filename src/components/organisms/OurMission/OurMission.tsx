import React from 'react';
import { OurMissionText } from '../../molecules';
import './styles/index.scss';

export default function OurMission(): React.ReactElement {
  return (
    <div id="mission" className="our-mission-wrapper">
      <OurMissionText />
    </div>
  );
}
