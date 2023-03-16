import React from 'react';

var buttonClass = "w-10 h-10 rounded-full border border-gray-300"

const Selection = () => {
  return (
    <div className="w-1/4 box-border border border-gray-400">
      <div>
        <p>Star Rating</p>
        <p>Category</p>
        <p>Expanded Product Name</p>
        <p>Price</p>
      </div>
      <div>
        <p>STYLE > SELECTED STYLE</p>
      </div>
      <div>
        <div className="flex flex-row justify-start">
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
        </div>
        <div className="flex flex-row justify-start">
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
          <button className={buttonClass}></button>
        </div>
        <div>
          Form component
        </div>
      </div>
    </div>
  );
}

export default Selection;