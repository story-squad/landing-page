import { classnames, useClickOutside } from '@story-squad/react-utils';
import React from 'react';
import HeaderMenuItems from './HeaderMenuItems';
import { headerNavItems } from './headerNavItems';
import './styles/headerMenu.scss';
import useHeaderContext from './useHeaderContext';

export default function HeaderMenu(): React.ReactElement {
  const { menuIsOpen, closeMenu } = useHeaderContext();

  const [clickRef] = useClickOutside<HTMLUListElement>({
    onClick: closeMenu,
    isActive: menuIsOpen,
  });

  return (
    <div className={classnames('header-menu', !menuIsOpen && 'collapsed')}>
      <nav>
        <ul ref={clickRef}>
          {headerNavItems.map(({ linkUrl, linkName }, i) => (
            <HeaderMenuItems key={i} linkName={linkName} linkUrl={linkUrl} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
