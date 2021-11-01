import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderNav from './HeaderNav';
import HeaderToggle from './HeaderToggle';
import './styles/index.scss';

export default function Header(): React.ReactElement {
  return (
    <header className="main-header-wrapper">
      <div className="main-header-container">
        <section id="main-header">
          <h1>Story Squad</h1>
        </section>
        <HeaderNav />
        <HeaderToggle />
      </div>
      <HeaderMenu />
    </header>
  );
}
