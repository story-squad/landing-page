import React from 'react';
import NameAndPencil from './NameAndPencil';
import './styles/index.scss';

export default function Footer(): React.ReactElement {
  return (
    <footer id="main-footer">
      <div className="main-footer-container">
        {/* ADD NAV */}
        <NameAndPencil />
      </div>
    </footer>
  );
}
