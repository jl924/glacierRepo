import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full bg-gray-600 h-[50px]">
        <p className="text-white ml-[10px]">BENJ</p>
        <p>_________</p>
      </div>
      <div className="flex justify-center items-center w-full text-gray-400 h-[35px]">
        <p className="italic">SITE-WIDE ANNOUNCEMENT MESSAGE! &nbsp;</p>-- SALE/DISCOUNT
        <p className="font-bold text-black ml-[5px]">OFFER &nbsp;</p> --
        <p className="text-decoration: underline">&nbsp; NEW PRODUCT HIGHLIGHT</p>
      </div>
    </div>
  );
}

export default Header;