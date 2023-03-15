import React from 'react';
import Imageslide from './ProductComp/Imageslide.js';
import Selection from './ProductComp/Selection.js';

const Product = () => {
  return (
    <div className="flex flex-row box-border w-full h-80 p-4 border border-gray-400">
      <Imageslide />
      <Selection />
    </div>
  );
}

export default Product;