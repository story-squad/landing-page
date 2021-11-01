import React from 'react';
import HeaderMenuItems from './HeaderMenuItems';
import { headerNavItems } from './headerNavItems';
import './styles/headerNav.scss';

export default function HeaderNav(): React.ReactElement {
  return (
    <nav className="header-nav">
      <ul>
        {headerNavItems.map(({ linkUrl, linkName }, i) => (
          <HeaderMenuItems key={i} linkName={linkName} linkUrl={linkUrl} />
        ))}
      </ul>
    </nav>
  );
}
