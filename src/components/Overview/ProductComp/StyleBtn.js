import React, {useState} from 'react';

const StyleBtn = ({style, handleStyleClick}) => {


  const[imgs, setImgs] = useState([])
  var buttonClass = "flex items-center justify-center w-10 h-10 rounded-full border mr-[10px] mt-[10px]"

  return (
    <button onClick={() => handleStyleClick(style.id)} className={buttonClass}>
      <img src={style.img} className="w-full h-full object-cover rounded-full" />
    </button>
  );
}

export default StyleBtn;