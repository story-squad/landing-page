import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({
  linkName,
  linkUrl,
  key,
}: NavItemProps): React.ReactElement {
  return (
    <li key={key}>
      <Link to={linkUrl} target="_blank">
        {linkName}
      </Link>
    </li>
  );
}

interface NavItemProps {
  linkName: string;
  linkUrl: string;
  key: number;
}
