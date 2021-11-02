import React from 'react';
// import { callToActionBG } from '../../../assets';
import { CallToActionText } from '../../molecules';
import './styles/index.scss';

export default function CallToAction(): React.ReactElement {
  return (
    <div className="action-call-wrapper">
      <div className="hero-img" aria-hidden>
        <CallToActionText />
      </div>
    </div>
  );
}
