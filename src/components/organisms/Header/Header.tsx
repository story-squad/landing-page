import React from 'react';
import './styles/index.scss';

export default function Header(): React.ReactElement {
  return (
    <header className="main-header-wrapper">
      <div className="main-header-container">
        {/* <HeaderToggle /> */}
        <section id="main-header">
          {/* <ClashLogo className="logo" /> */}
          <h1>Story Squad</h1>
        </section>
        {/* <InlineNav /> */}
      </div>
      {/* <HeaderMenu /> */}
    </header>
  );
}
