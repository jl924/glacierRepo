import React, {useState} from 'react';

const StyleBtn = ({sty, handleStyleClick, selectedId}) => {

  var buttonClass = "flex items-center justify-center w-[50px] h-[50px]"


  return (
    selectedId===sty.id ? (
      <div className="flex justify-center mr-[10px] items-center h-[55px] hover:animate-pulse">
        <div className="absolute bg-white mb-[40px] ml-[37px] w-[15px] h-[15px] rounded-full border border-black">
          <p className="text-xs ml-[1px] mb-[1px] font-light text-black">✓</p>
        </div>
        <button onClick={() => handleStyleClick(sty.id)} className="flex items-center justify-center w-[50px] h-[50px]">
          <img src={sty.img} className="w-full h-full object-cover rounded-full border-2 border-black" />
        </button>
      </div>
    ) : (
      <div className="flex items-center justify-center mr-[10px] h-[55px] hover:animate-pulse">
      <button onClick={() => handleStyleClick(sty.id)} className={buttonClass}>
        <img src={sty.img} className="w-full h-full object-cover rounded-full border-2 border-black" />
      </button>
      </div>
    )
  );
}

export default StyleBtn;