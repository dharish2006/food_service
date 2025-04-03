import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice"; // a reducer imported from the cartSlice

const FoodCard = ({ id, name, price, desc, rating, img, handelToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold  lg:w-[250px] w-[300px] h-[320px] bg-[#F5EFFF] p-5 rounded-lg  flex flex-col">
      <img
        src={img}
        alt=""
        className="rounded-lg w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between mt-2 text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal mt-2 flex-grow">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center mt-auto ">
        <span className="flex">
          <FaStar className="text-yellow-400 mt-1 mr-1" /> {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({id,name,price,img, qty: 1})); handelToast(name);
        }} className="bg-[#A294F9] text-white p-1.5 hover:bg-[#500073] rounded-lg cursor-pointer text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default FoodCard;
