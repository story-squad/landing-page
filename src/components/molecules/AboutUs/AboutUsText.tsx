import React from 'react';
import { Paragraph } from '../../atoms';
import './styles/index.scss';

export default function AboutUsText(): React.ReactElement {
  return (
    <div className="about-content">
      <h2>About Us</h2>
      <Paragraph>
        We&apos;re a team of educators, designers, engineers, and data
        scientists who believe that kids, when given the chance to express
        themselves creatively, know how to tell sophisticated and clever and
        silly and scary and whimsical and fantastic and adventurous and
        heartbreaking stories at a young age. Preserving access to this literary
        imagination is a project worth championing for all kids around the
        world, and it is why Story Squad was founded. While building this app,
        we are merely custodians. Ultimately, Story Squad will belong to the
        creative community of kids, their parents and inspiring teachers; we
        promise to serve this community and deliver on our mission—and never
        have our strategy set by trying to maximize a user&apos;s
        time-on-device.
      </Paragraph>
    </div>
  );
}
