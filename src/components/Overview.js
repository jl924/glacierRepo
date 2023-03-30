import React from 'react';
import {useEffect, useState} from 'react';
import Header from './Overview/Header.js';
import Product from './Overview/Product.js';
import Description from './Overview/Description.js';
import helpers from './Overview/reqHelpers.js'
import { useSelector } from 'react-redux'
import selectedProductSlice from '.././reducers/selectedProductSlice'

const getInfoById = helpers.getInfoById

const Overview = (store) => {

  const selectedProduct = useSelector((state) => state.selectedProductReducer.selectedProduct)

  var productId = 37311

  if(selectedProduct) {
    productId = selectedProduct.id
  }

  const cartItems = useSelector((state) => state.cartReducer.cart)
  const id = useSelector((state) => state)

  return (
    <div className="flex flex-col items-center">
      <Header id="header" />
      <Product productId={productId} info={selectedProduct}/>
      <Description className="left-0" info={selectedProduct}/>
    </div>
  );
}

export default Overview;