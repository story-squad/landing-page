import React from 'react';
import { LastTimeText } from '../../molecules';
import './styles/index.scss';

export default function LastTime(): React.ReactElement {
  return (
    <div className="last-time-wrapper">
      <LastTimeText />
    </div>
  );
}
