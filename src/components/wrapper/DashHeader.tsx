import React from "react";
const DashHeader = () => {
  return (
    <header className="absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-2 py-2 text-white">
      <img
        src={require("../../assets/logo.png")}
        alt="Switch Logo"
        className="w-[25%] lg:[15%] object-contain"
      />
      {/* <nav>Header</nav> */}
    </header>
  );
};

export default DashHeader;
