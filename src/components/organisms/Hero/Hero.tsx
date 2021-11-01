import React from 'react';
import { HeroText } from '../../molecules';
import './styles/index.scss';

export default function Hero(): React.ReactElement {
  return (
    <div className="hero-wrapper">
      <HeroText />
    </div>
  );
}
