import React, { useState } from "react";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/womens.jpg";
import kidsImg from "../assets/kids.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const [sortOrder, setSortOrder] = useState("default");
  const [filterType, setFilterType] = useState("All");

  const handleSortChange = (e) => setSortOrder(e.target.value);
  const handleFilterChange = (e) => setFilterType(e.target.value);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 py-25">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Shop by Category
      </h2>

      {/* Filter & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Men Category */}
        <div className="rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300">
          <img
            src={menImg}
            alt="Men"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Men</h3>
            <p className="text-gray-600 mb-4">
              Explore the latest trends in men's fashion including shirts, jeans, and more.
            </p>
            <Link to="/men">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Women Category */}
        <div className="rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300">
          <img
            src={womenImg}
            alt="Women"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Women</h3>
            <p className="text-gray-600 mb-4">
              Discover elegant styles, dresses, and accessories for every occasion.
            </p>
            <Link to="/women">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Kids Category */}
        <div className="rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300">
          <img
            src={kidsImg}
            alt="Kids"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">Kids</h3>
            <p className="text-gray-600 mb-4">
              Fun and comfortable clothing for your little ones, from toddlers to teens.
            </p>
            <Link to="/kid">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
