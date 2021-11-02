import React from 'react';
import { burst } from '../../../assets';
import { Button, Paragraph } from '../../atoms';
import './styles/index.scss';

export default function CallToAction(): React.ReactElement {
  return (
    <div className="call-action-content">
      <div className="burst-w-text">
        <img src={burst} alt="orange burst" className="burst" />
        <Paragraph>
          Join us as we build the world&apos;s first creative writing e-sports
          league armed with a pencil, paper, and their brilliant minds.
        </Paragraph>
      </div>
      <Button>Join Now</Button>
    </div>
  );
}
