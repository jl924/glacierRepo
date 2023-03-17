import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col box-border border border-gray-400">
      <div className="flex items-center w-full bg-gray-800 h-[50px]">
        <p className="text-white ml-[10px]">Company Name</p>
        <p>_________</p>
      </div>
      <div className="flex justify-center w-full box-border border border-gray-400">
        announcement
      </div>
    </div>
  );
}

export default Header;