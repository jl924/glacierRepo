import React from 'react';
import {useState, useEffect} from 'react'
import Imageslide from './ProductComp/Imageslide.js';
import Selection from './ProductComp/Selection.js';
import axios from 'axios';
import helpers from './reqHelpers.js'

const getProductById = helpers.getProductById

const Product = ({info, productId}) => {
  const [product, setProduct] = useState(null);
  const [style, setStyle] = useState({})
  const[expanded, setExpanded] = useState(false)

  useEffect(() => {
    getProductById(productId)
      .then(product => {
        setProduct(product)
        setStyle(product.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [productId])

  return (
    expanded ? (
      <div className="flex flex-row box-border w-full h-[600px]">
        <Imageslide expanded={expanded} setExpanded={setExpanded} product={product} style={style}/>
      </div>
    ) : (
      <div className="flex flex-row box-border w-full h-[550px]">
        <Imageslide expanded={expanded} setExpanded={setExpanded} product={product} style={style}/>
        <Selection style={style} info={info} product={product} setStyle={setStyle}/>
      </div>
    )
  );
}

export default Product;