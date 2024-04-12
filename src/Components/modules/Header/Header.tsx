import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-gray-800">
      <div className="w-full h-full flex">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-gray-100 text-2xl">نکستــگرام</h1>
        </div>
        <div className="flex flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
