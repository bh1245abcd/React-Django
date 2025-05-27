// components/WishlistItem.jsx
import React from "react";

const WishlistItem= ({ product, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-100 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default WishlistItem;
