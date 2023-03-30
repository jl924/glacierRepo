import React from 'react';
import {useState, useEffect} from 'react'
import { FacebookShareButton } from 'react-share';
import { TwitterShareButton } from 'react-share';
import { PinterestShareButton } from 'react-share';

const Description = ({info}) => {

  return (
    <div className="flex flex-row self-start items-center justify-center box-border w-4/5 h-40 align">
      <div className="w-3/4 mr-[5px]">
        <div className="font-bold">{info ? (info.slogan) : (<></>)}</div>
        <div className="text-gray-400">
          {info ? (info.description) : (<></>)}
        </div>
      </div>
      <div className="flex justify-center items-center border-l-2 border-black pl-4 h-[100px]">
        {info && info.features ? (
        <div>
          {info.features.map((item, index) =>
            <div key={index} className="flex w-[250px]">
              <p className="text-green-400 mr-[6px]">✓</p>
              <p className="flex font-bold">{item.value} {item.feature}</p>
            </div>
          )}
        </div>
        ) : (
        <p></p>)}
      </div>
    </div>
  );
}

export default Description;