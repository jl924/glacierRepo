import React from 'react';
import {useEffect, useState} from 'react';
import Header from './Overview/Header.js';
import Product from './Overview/Product.js';
import Description from './Overview/Description.js';
import helpers from './Overview/reqHelpers.js'
import { useSelector } from 'react-redux'

const getInfoById = helpers.getInfoById

const Overview = (store) => {
  const[info, setInfo] = useState([])

  const cartItems = useSelector((state) => state.cartReducer.cart)
  console.log(cartItems)

  const id = useSelector((state) => state)

  useEffect(() => {
    getInfoById(37311)
      .then(info => {
        setInfo(info)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="flex flex-col items-center">
      <Header id="header"/>
      <Product info={info}/>
      <Description info={info}/>
    </div>
  );
}

export default Overview;