import React, {useState} from 'react';

const StyleBtn = ({style, handleStyleClick, selectedId}) => {

  var buttonClass = "flex items-center justify-center w-[50px] h-[50px] rounded-full border mr-[10px] mt-[10px]"


  return (
    selectedId===style.id ? (
      <div>
        <div className="absolute bg-white mt-[5px] ml-[30px] w-[20px] h-[20px] rounded-full border border-black">
          <p className="text-xs ml-[4px] mt-[2px]">✓</p>
        </div>
        <button onClick={() => handleStyleClick(style.id)} className={buttonClass}>
          <img src={style.img} className="w-full h-full object-cover rounded-full border border-black" />
        </button>
      </div>
    ) : (
      <button onClick={() => handleStyleClick(style.id)} className={buttonClass}>
        <img src={style.img} className="w-full h-full object-cover rounded-full border border-black" />
      </button>
    )
  );
}

export default StyleBtn;