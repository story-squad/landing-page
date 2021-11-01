import React from 'react';
import { LastTimeText } from '../../molecules';
import './styles/index.scss';

export default function LastTime(): React.ReactElement {
  return (
    <div id="learn-more" className="last-time-wrapper">
      <LastTimeText />
    </div>
  );
}
