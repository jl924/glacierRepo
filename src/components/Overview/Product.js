import React from 'react';
import {useState, useEffect} from 'react'
import Imageslide from './ProductComp/Imageslide.js';
import Selection from './ProductComp/Selection.js';
import axios from 'axios';
import helpers from './reqHelpers.js'

const getProductById = helpers.getProductById

const Product = ({info}) => {
  const [product, setProduct] = useState(null);
  const [style, setStyle] = useState({})

  useEffect(() => {
    getProductById(37311)
      .then(product => {
        setProduct(product)
        setStyle(product.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="flex flex-row box-border w-full h-[550px]">
      <Imageslide product={product} style={style}/>
      <Selection style={style} info={info} product={product} setStyle={setStyle}/>
    </div>
  );
}

export default Product;