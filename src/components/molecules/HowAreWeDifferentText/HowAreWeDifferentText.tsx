import React from 'react';
import { brain, colorPalette, trophy } from '../../../assets';
import { Paragraph } from '../../atoms';
import './styles/index.scss';

export default function HowAreWeDifferentText(): React.ReactElement {
  return (
    <div className="how-we-different-content">
      <h2>How Are We Different?</h2>
      <div className="items">
        <div className="item-with-icon">
          <img src={brain} />
          <Paragraph>
            Kids&apos; brains are vulnerable to blasts of dopamine caused by
            bingeing on video games and social media.
          </Paragraph>
        </div>
        <div className="item-with-icon">
          <img src={colorPalette} />
          <Paragraph>
            Story Squad uses small servings of screentime to drive kids back
            into offline creative mode.
          </Paragraph>
        </div>
        <div className="item-with-icon">
          <img src={trophy} />
          <Paragraph>
            We re-purpose the social reward structure of video games to motivate
            them in reading & writing.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
