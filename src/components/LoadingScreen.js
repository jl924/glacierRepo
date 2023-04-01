import React from 'react';
import '../styles/loading.css'

import {useEffect} from 'react'

const LoadingScreen = ({setIsLoading, isLoading}) => {


  useEffect(()=> {
    if(isLoading===false) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading])

  setTimeout(() => {setIsLoading(false);}, 3000)


  return (
    <div className={`bg-black absolute w-screen h-screen flex items-center justify-center fade transition-all duration-200 ${!isLoading ? 'opacity-0' : ''}`}>
      <button  className="loadButton">
        <img className="glowing-image" src="https://i.imgur.com/beNiCcN.jpg" />
      </button>
      <div className="blobs-container">
        <div className="blob"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
