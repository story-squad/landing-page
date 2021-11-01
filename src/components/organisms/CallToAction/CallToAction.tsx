import React from 'react';
import { CallToActionText } from '../../molecules';
import './styles/index.scss';

export default function CallToAction(): React.ReactElement {
  return (
    <div className="action-call-wrapper">
      <CallToActionText />
    </div>
  );
}
