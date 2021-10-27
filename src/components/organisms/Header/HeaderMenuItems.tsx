import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HeaderMenuItems({
  linkName,
  type,
  linkUrl,
  target,
  options,
  key,
}: HeaderMenuItemProps): React.ReactElement {
  return type === 'link' ? (
    <li key={key}>
      <Link to={linkUrl} target={target}>
        {linkName}
      </Link>
    </li>
  ) : (
    <li key={key}>
      <p>
        {linkName}
        <FaCaretDown />
      </p>
    </li>
  );
}

interface HeaderMenuItemProps {
  linkName: string;
  linkUrl: string;
  options?: {
    linkName: string;
    linkUrl: string;
    target: string;
  }[];
  type: string;
  target?: string;
  key: number;
}
