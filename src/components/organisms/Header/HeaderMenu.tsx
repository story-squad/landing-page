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
    </div>
  );
}
