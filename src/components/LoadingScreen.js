import React from 'react';
import '../styles/loading.css'

const LoadingScreen = ({setIsLoading}) => {
  return (
    <div className="bg-black absolute w-screen h-screen flex items-center justify-center">
      <button className="loadButton hover:scale-125 transition-all duration-1000]"
      onClick={() => {setTimeout(() => {setIsLoading(false)}, 1000)}}
      onMouseEnter={() => {console.log('enter')}}
      >
        <img className="glowing-image" src="https://i.imgur.com/beNiCcN.jpg" />
      </button>
    </div>
  );
}

export default LoadingScreen;