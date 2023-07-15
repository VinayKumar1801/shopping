import React from "react";
import { IoSearch, IoFilter } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex justify-between gap-5 items-center">
      <div className="flex flex-1 items-center bg-white border border-gray-300 my-5 rounded p-2">
        <IoSearch size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search anything"
          className="flex-grow px-2 outline-none"
        />
      </div>
      <div className="bg-black rounded p-3 flex-7">
        <IoFilter size={20} className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
