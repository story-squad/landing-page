import React from 'react';
import { OldMeetsNewText } from '../../molecules';
import './styles/index.scss';

export default function OldMeetsNew(): React.ReactElement {
  return (
    <div className="old-new-hero">
      <div className="hero-img">
        <svg
          width="500"
          height="80"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="shape">
              <path d="M0,0 L0,80 Q250,60 500,80 L500,0 Z" />
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width="500"
            height="80"
            fill="#fff8f0"
            clipPath="url(#shape)"
          />
        </svg>
      </div>
      <div className="old-meets-new-wrapper">
        <OldMeetsNewText />
      </div>
    </div>
  );
}
