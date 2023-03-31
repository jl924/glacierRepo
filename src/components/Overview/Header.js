import React from 'react';
import '../../styles/loading.css'
const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full bg-primary h-[50px]">
        <img className="logo absolute h-[50px] mt-[10px]" src="https://i.imgur.com/beNiCcN.jpg" alt="Benj logo" />
      </div>
      <div className="flex justify-center items-center w-full text-gray-400 h-[35px]">
        <p className="italic text-primary">SITE-WIDE ANNOUNCEMENT MESSAGE! &nbsp; --  &nbsp;</p><p className="text-secondary"> SALE/DISCOUNT</p>
        <p className="font-bold ml-[5px] text-primary">OFFER &nbsp; -- &nbsp;</p>
        <p className="text-secondary text-decoration: underline"> Ocean Blue Camo Onsie</p>
      </div>
    </div>
  );
}

export default Header;