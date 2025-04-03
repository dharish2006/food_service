import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 mx-6 mb-7 ">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">DC FC Service</h1>
      </div>
      <div className="m-6">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e)=> dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 bg-[#F5EFFF] rounded-lg text-sm outline-none w-[90vw] lg:w-[25vw] "
        />
      </div>
    </nav>
  );
};

export default Navbar;
