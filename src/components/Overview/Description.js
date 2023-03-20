import React from 'react';
import {useState, useEffect} from 'react'


const Description = ({info}) => {

  return (
    <div className="flex flex-row box-border w-5/6 h-40 p-4">
      <div className="w-3/4">
        <div className="font-bold">{info.slogan}</div>
        <div className="text-gray-400">
          {info.description}
        </div>
      </div>
      <div className="border-l-2 border-black pl-4">
        {info.features ? (
        <div>
          {info.features.map((item, index) =>
            <p key={index}>{item.feature} : {item.value}</p>
          )}
        </div>
        ) : (
        <p></p>)}
      </div>
    </div>
  );
}

export default Description;