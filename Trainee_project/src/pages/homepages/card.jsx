import React from 'react';
import menone from '../../assets/menone.jpg';
import womenone from '../../assets/womenone.jpg';
import kidone from '../../assets/kidone.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="flex justify-between items-center px-6 lg:px-20 mt-15 mb-6">
        <p className="text-3xl font-bold text-gray-800 ">Our Product Categories</p>
        <Link to="/Categories">
          <p className="text-blue-600 font-medium hover:underline cursor-pointer">
            View All Products
          </p>
        </Link>
      </div>

      {/* Category Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 lg:px-20 mb-10">
        {/* Men's Category */}
        <Link to="/men" className="group">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={menone}
              alt="Men's category"
              className="w-[420px] h-[420px] object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <p className="text-center py-2 font-medium text-lg text-gray-700">Shop for Men</p>
          </div>
        </Link>

        {/* Women's Category */}
        <Link to="/women" className="group">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={womenone}
              alt="Women's category"
              className="w-[420px] h-[420px] object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <p className="text-center py-2 font-medium text-lg text-gray-700">Shop for Women</p>
          </div>
        </Link>

        {/* Kids' Category */}
        <Link to="/kids" className="group">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={kidone}
              alt="Kids' category"
              className="w-[420px] h-[420px] object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <p className="text-center py-2 font-medium text-lg text-gray-700">Shop for Kids</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
