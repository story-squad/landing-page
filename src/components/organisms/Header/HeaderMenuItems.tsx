import React from 'react';
import useHeaderContext from './useHeaderContext';

export default function HeaderMenuItems({
  linkName,
  linkUrl,
}: HeaderMenuItemProps): React.ReactElement {
  const { closeMenu } = useHeaderContext();

  return (
    <li>
      <a onClick={closeMenu} href={linkUrl}>
        {linkName}
      </a>
    </li>
  );
}

interface HeaderMenuItemProps {
  linkName: string;
  linkUrl: string;
}
