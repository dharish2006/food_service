import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux"; //use dispatch is use to get the reducers from the store
import { removeFromCart,incrementQty,decrementQty } from "../redux/slices/CartSlice"; //This is a reducer form CartSlice
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, img, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" m-5 px-3 py-3 flex items-center bg-[#E5D9F2] shadow-md shadow-[#E5D9F2] rounded-lg relative">
        <img src={img} alt="" className="w-[50px] h-[50px] rounded-lg" />
        <div className="flex flex-col ml-3">
          <div className="flex ">
            <span className="">{name}</span>
            <div>
              <MdDelete
                onClick={() =>
                  {dispatch(removeFromCart({ id, name, price, img, qty }));
                  toast(`${name} Removed !!`, {
                    icon: '👋',
                  }); }
                }
                className="absolute right-7 text-gray-600 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex">
            <span>₹{price}</span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              <AiOutlineMinus onClick={()=> qty >1 ? dispatch(decrementQty({id})) : (qty=0) } className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
              <span>{qty}</span>
              <AiOutlinePlus onClick={()=> dispatch(incrementQty({id}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
