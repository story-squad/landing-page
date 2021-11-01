import React from 'react';
import { Paragraph } from '../../atoms';
import './styles/index.scss';

export default function StreamText(): React.ReactElement {
  return (
    <div className="stream-content">
      <h2> Livestream Recap</h2>
      <Paragraph>
        Every Weeknight Tune in at 8pm ET / 5pm PT Monday—Friday in the app for
        a livestream look of the day&apos;s top 3 stories. We&apos;ll break down
        the highlights, analyze the winning stories and offer some secret tips
        for how to score higher on StoryBot 3000&apos;s algorithms.
      </Paragraph>
    </div>
  );
}
