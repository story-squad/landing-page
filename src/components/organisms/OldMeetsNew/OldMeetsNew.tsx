import React from 'react';
import { OldMeetsNewText } from '../../molecules';
import './styles/index.scss';

export default function OldMeetsNew(): React.ReactElement {
  return (
    <div className="old-meets-new-wrapper">
      <div className="hero-img" aria-hidden>
        <OldMeetsNewText />
      </div>
    </div>
  );
}
