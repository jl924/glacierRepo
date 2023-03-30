import React, {useState} from 'react';

const StyleBtn = ({sty, handleStyleClick, selectedId}) => {

  var buttonClass = "flex items-center justify-center w-[50px] h-[50px] hover:h-[55px] hover:w-[55px] transition-all duration-100 rounded-full shadow-md shadow-black"


  return (
    selectedId===sty.id ? (
      <div className="flex justify-center mr-[10px] items-center h-[60px] w-[60px]">
        <div className="absolute bg-white mb-[40px] ml-[37px] w-[15px] h-[15px] rounded-full border border-black">
          <p className="text-xs ml-[1px] mb-[1px] font-light text-black">✓</p>
        </div>
        <button onClick={() => handleStyleClick(sty.id)} className="flex items-center justify-center w-[50px] h-[50px] hover:h-[55px] hover:w-[55px] transition-all duration-100 rounded-full shadow-md shadow-black">
          <img module="styleBtn|Overview" src={sty.img} className="w-full h-full object-cover rounded-full border border-black hover:border-2" />
        </button>
      </div>
    ) : (
      <div className="flex items-center justify-center mr-[10px] w-[60px] h-[60px] hover:animate-pulse">
      <button onClick={() => handleStyleClick(sty.id)} className={buttonClass}>
        <img module="styleBtn|Overview" name="styleBtn|Overview" src={sty.img} className="w-full h-full object-cover rounded-full border border-black hover:border-2" />
      </button>
      </div>
    )
  );
}

export default StyleBtn;