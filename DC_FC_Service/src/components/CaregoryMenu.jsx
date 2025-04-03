import React, { useState, useEffect } from "react"; // USEEFFECT is used to run the function only once when the component is mounted. It is used for dynamically changing data
import FoodDate from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodDate.map((food) => food.category)),
    ];

    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6 mb-6 flex flex-col justify-center items-center">
      <h3 className="text-xl font-semibold">A feast of flavours, crafted with care.</h3>
      <div className="my-5 flex gap-3 flex-wrap">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-[1rem] py-[0.5rem]  font-bold rounded-lg hover:bg-[#A294F9] hover:text-white ${
            selectedCategory === "All" ? "bg-[#A294F9] text-white" : "bg-[#F5EFFF]"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-[1rem] py-[0.5rem]  font-bold rounded-lg hover:bg-[#A294F9] hover:text-white ${
                selectedCategory === category ? "bg-[#A294F9] text-white" : "bg-[#F5EFFF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
