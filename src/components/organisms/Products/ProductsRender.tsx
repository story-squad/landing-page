import React from 'react';
import { Products } from '../../molecules';
import './styles/index.scss';

export default function RenderProducts(): React.ReactElement {
  return (
    <div className="products-wrapper">
      <Products />
    </div>
  );
}
