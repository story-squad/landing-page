import React from 'react';
import './styles/index.scss';

export default function Products(): React.ReactElement {
  return (
    <div className="product-content">
      <h2>Products</h2>
      <div className="product-items">
        <a
          onClick={() => window.open('https://www.wordhoax.com/')}
          className="hoax"
        />
        <a
          onClick={() => window.open('https://clash.storysquad.app/')}
          className="clash"
        />
        {/* <a
          onClick={() => window.open('https://www.wordhoax.com/')}
          className="rumble"
        /> */}
      </div>
    </div>
  );
}
