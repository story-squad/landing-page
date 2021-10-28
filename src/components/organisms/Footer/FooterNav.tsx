import React from 'react';
import { links } from './footerNavItems';
import NavItem from './NavItem';
import './styles/footerNav.scss';

export default function FooterNav(): React.ReactElement {
  return (
    <nav className="footer-nav">
      <ul>
        {links?.map(({ linkName, linkUrl }, i) => (
          <NavItem linkName={linkName} linkUrl={linkUrl} key={i} />
        ))}
        <li className="hide-on-tablet">&#169;2021 Story Squad HQ</li>
      </ul>
    </nav>
  );
}
