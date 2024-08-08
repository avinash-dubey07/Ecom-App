import React from 'react';
import { RxModulzLogo } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderMain = () => {
  return (
    <header className="border-b border-gray-300 py-4 flex justify-between items-center px-8">
      <div className=" ml-[250px] flex items-center space-x-2 cursor-pointer">
        <RxModulzLogo className="w-8 h-8" />
        <strong className="text-2xl">MicEco</strong>
      </div>

      <nav className="hidden sm:flex space-x-4">
        <button className="hover:bg-gray-200 px-4 py-2 rounded-xl">Men</button>
        <button className="hover:bg-gray-200 px-4 py-2 rounded-xl">Women</button>
        <button className="hover:bg-gray-200 px-4 py-2 rounded-xl">Sport</button>
        <div className="relative group">
          <button className="hover:bg-gray-100 px-4 py-2 rounded-xl flex">Explore <RiArrowDropDownLine className='text-2xl' /> </button>
          <div className="absolute hidden group-hover:block bg-white border border-gray-200 mt-1 z-50 rounded-lg">
            <a href="#" className="block w-[120px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full">Explore 1</a>
            <a href="#" className="block w-[120px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full">Explore 2</a>
            <a href="#" className="block w-[120px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full">Explore 3</a>
            <a href="#" className="block w-[120px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full">Explore 4</a>
            <a href="#" className="block w-[120px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full">Explore 5</a>
          </div>
        </div>
      </nav>
      <div className="flex mr-[250px] space-x-4 items-center cursor-pointer">
        <CiSearch className="w-16 h-9 hover:bg-gray-200 p-1 rounded-full" />
        <MdOutlineAccountCircle className="w-16 h-9 text-gray-500 hover:bg-gray-200 p-1 rounded-full" />
        <div className="relative">
          <PiShoppingCartThin className="w-16 h-9 hover:bg-gray-200 p-1 rounded-full" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-normal leading-none text-red-50 bg-cyan-500 rounded-full">3</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
