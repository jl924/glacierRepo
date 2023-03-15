import React from 'react';
import Header from './Overview/Header.js';
import Product from './Overview/Product.js';
import Description from './Overview/Description.js';

const Overview = () => {
  return (
    <div>
      <Header />
      <Product />
      <Description />
    </div>
  );
}

export default Overview;