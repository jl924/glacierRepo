import React from 'react';
const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full bg-primary h-[50px]">
        <img className=" absolute h-[50px] mt-[10px]" src="https://i.imgur.com/beNiCcN.jpg" alt="Benj logo" />
      </div>
      <div className="flex justify-center items-center w-full text-gray-400 h-[35px]">
        <p className="italic text-primary">SITE-WIDE ANNOUNCEMENT MESSAGE! &nbsp;</p><p className="text-secondary">-- SALE/DISCOUNT</p>
        <p className="font-bold ml-[5px] text-primary">OFFER &nbsp;</p> --
        <p className="text-secondary text-decoration: underline">&nbsp; NEW PRODUCT HIGHLIGHT</p>
      </div>
    </div>
  );
}

export default Header;