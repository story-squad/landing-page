import React from 'react';
import { AboutUsText } from '../../molecules';
import './styles/index.scss';

export default function AboutUs(): React.ReactElement {
  return (
    <div className="about-wrapper">
      <AboutUsText />
    </div>
  );
}
