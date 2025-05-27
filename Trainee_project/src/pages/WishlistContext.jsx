import React, { createContext, useState } from "react";
import shirtImg from "../assets/images.jpg";
import shirtImg1 from "../assets/shopping.webp";
export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Stylish Shirt",
      price: 29.99,
      image: shirtImg,
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 59.99,
      image: shirtImg1,
    },
  ]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
