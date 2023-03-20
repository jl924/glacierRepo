import React from 'react';
import {useEffect, useState} from 'react';
import Header from './Overview/Header.js';
import Product from './Overview/Product.js';
import Description from './Overview/Description.js';
import helpers from './Overview/reqHelpers.js'

const getInfoById = helpers.getInfoById

const Overview = () => {

  const[info, setInfo] = useState([])

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
      <Header />
      <Product info={info}/>
      <Description info={info}/>
    </div>
  );
}

export default Overview;