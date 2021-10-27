import React from 'react';
import HeaderMenuItems from './HeaderMenuItems';
import './styles/headerNav.scss';

export const headerNavItems = [
  {
    type: 'link',
    linkName: 'Mission',
    linkUrl: '',
    target: '',
  },
  {
    type: 'dropdown',
    linkName: 'Products',
    //No link here left this here so it dosnt complicate things and keeps eslint happy
    linkUrl: '',
    options: [{ linkName: '', linkUrl: '', target: '' }],
  },
  {
    type: 'link',
    linkName: 'About Us',
    linkUrl: '',
    target: '',
  },
  {
    type: 'link',
    linkName: 'Contact',
    linkUrl: '',
    target: '',
  },
];

export default function HeaderNav(): React.ReactElement {
  return (
    <nav className="header-nav">
      <ul>
        {headerNavItems.map(
          ({ linkUrl, linkName, type, options, target }, i) => (
            <HeaderMenuItems
              target={target}
              options={options}
              key={i}
              linkName={linkName}
              linkUrl={linkUrl}
              type={type}
            />
          ),
        )}
      </ul>
    </nav>
  );
}
