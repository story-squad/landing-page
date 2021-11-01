import React from 'react';
import { pencil } from '../../../assets';
import { Button, Paragraph } from '../../atoms';
import './styles/index.scss';

export default function HeroText(): React.ReactElement {
  return (
    <div className="hero-content">
      <img className="hero-img" src={pencil} alt="pencil with happy face" />
      <div className="hero-text">
        <Paragraph>
          In a world of endless screentime, Story Squad set out to inspire kids
          to tap into their natural creativity armed with only a pencil & piece
          of paper.
        </Paragraph>
        <Button onClick={() => (window.location.hash = 'learn-more')}>
          Learn More
        </Button>
      </div>
    </div>
  );
}
