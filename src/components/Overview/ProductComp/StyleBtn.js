import React, {useState} from 'react';

const StyleBtn = ({style, handleStyleClick}) => {

  var buttonClass = "flex items-center justify-center w-[50px] h-[50px] rounded-full border mr-[10px] mt-[10px]"

  return (
    <button onClick={() => handleStyleClick(style.id)} className={buttonClass}>
      <img src={style.img} className="w-full h-full object-cover rounded-full border border-black" />
    </button>
  );
}

export default StyleBtn;