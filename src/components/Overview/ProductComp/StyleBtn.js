import React, {useState} from 'react';

const StyleBtn = ({sty, handleStyleClick, selectedId}) => {

  var buttonClass = "flex items-center justify-center w-[50px] h-[50px] rounded-full border mr-[10px] mt-[10px]"


  return (
    selectedId===sty.id ? (
      <div>
        <div className="absolute bg-white mt-[8px] ml-[37px] w-[15px] h-[15px] rounded-full border border-black">
          <p className="text-xs ml-[1px] mb-[1px] font-light text-black">✓</p>
        </div>
        <button onClick={() => handleStyleClick(sty.id)} className={buttonClass}>
          <img src={sty.img} className="w-full h-full object-cover rounded-full border border-black" />
        </button>
      </div>
    ) : (
      <button onClick={() => handleStyleClick(sty.id)} className={buttonClass}>
        <img src={sty.img} className="w-full h-full object-cover rounded-full border border-black" />
      </button>
    )
  );
}

export default StyleBtn;