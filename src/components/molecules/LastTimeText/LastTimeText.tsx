import React from 'react';
import { thoughtBubble } from '../../../assets';
import { Paragraph } from '../../atoms';
import './styles/index.scss';

export default function LastTimeText(): React.ReactElement {
  return (
    <div className="last-time-content">
      <img src={thoughtBubble} />
      <div>
        <h2>When was the last time...</h2>
        {/* TODO THIS WILL BE CHANGED TO SWITCH MESSAGES IN THE FUTURE */}
        <Paragraph>
          Your child laughed with friends as they competed to see who could
          write a funnier pirate story?
        </Paragraph>
      </div>
    </div>
  );
}
