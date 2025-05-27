import React, { useState } from "react";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/womens.jpg";
import kidsImg from "../assets/kids.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const [sortOrder, setSortOrder] = useState("default");
  const [filterType, setFilterType] = useState("All");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  // Filter categories by type, or show all if filter is "All"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Shop by Category
      </h2>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Filter */}
        <div>
          <label className="mr-2 text-sm font-medium text-gray-700">Filter:</label>
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mr-2 text-sm font-medium text-gray-700">Sort:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="default">Default</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex gap-[10px]">

         <div className="b1 hover:shadow-2xl transition-shadow duration-300 text-center">
           <img src={menImg} alt="" className="transform group-hover:scale-105 transition-transform duration-300"/>
           <p style={{textAlign:"center",fontSize:"28px"}}>men</p>
           <p style={{textAlign:"center"}}>Explore the latest trends in men's fashion including shirts, jeans, and more.</p>
           <Link to="/men"><button className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors 
           duration-300">Shop Now</button></Link>
         </div>

         <div className="b2 text-center">
           <img src={womenImg} alt="" className="transform group-hover:scale-105 transition-transform duration-300"/>
            <p style={{textAlign:"center",fontSize:"28px"}}>women</p>
            <p style={{textAlign:"center"}}>Discover elegant styles, dresses, and accessories for every occasion</p>
            <Link to="/women"><button className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 
            transition-colors duration-300">Shop Now</button></Link>
         </div>

         <div className="b3 text-center">
           <img src={kidsImg} alt="" className="transform group-hover:scale-105 transition-transform duration-300"/>
           <p style={{textAlign:"center",fontSize:"28px"}}>kid</p>
           <p style={{textAlign:"center"}}>Fun and comfortable clothing for your little ones, from toddlers to teens</p>
           <Link to="/kid"><button className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 
           transition-colors duration-300 ">Shop Now</button></Link>
         </div>

      </div>

    </div>
  );
};

export default Categories;
