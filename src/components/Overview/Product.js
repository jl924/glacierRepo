import React from 'react';
import {useState, useEffect} from 'react'
import Imageslide from './ProductComp/Imageslide.js';
import Selection from './ProductComp/Selection.js';
import axios from 'axios';
import getProductById from './reqHelpers.js'

const Product = () => {
  const [product, setProduct] = useState(null);
  const [style, setStyle] = useState({})

  useEffect(() => {
    getProductById(37311)
      .then(product => {
        setProduct(product)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="flex flex-row box-border w-full h-[500px] p-4 border border-gray-400">
      <Imageslide product={product} style={style}/>
      <Selection product={product} setStyle={setStyle}/>
    </div>
  );
}

export default Product;