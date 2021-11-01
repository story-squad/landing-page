import React from 'react';
import './styles/index.scss';

export default function Paragraph({
  children,
}: React.PropsWithChildren<unknown>): React.ReactElement {
  return <p className="paragraph">{children}</p>;
}
