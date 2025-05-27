import React, { useContext } from "react";
import {WishlistContext} from "./WishlistContext"

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className=" bg-white py-6 px-4 sm:px-8 pb-40">
      <p className="text-2xl font-extrabold text-center text-black mb-6 p-6">
        My Wishlist
      </p>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is currently empty.
        </p>
        
      ) : (
        <div className="overflow-x-auto max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <table className="min-w-full table-auto border border-gray-300 text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border border-black-300 px-4 py-2 text-sm sm:text-base">
                  Image
                </th>
                <th className="border border-black-300 px-4 py-2 text-sm sm:text-base">
                  Product
                </th>
                <th className="border border-black-300 px-4 py-2 text-sm sm:text-base">
                  Price
                </th>
                <th className="border border-black-300 px-4 py-2 text-sm sm:text-base">
                  Quantity
                </th>
                <th className="border border-black-300 px-4 py-2 text-sm sm:text-base">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id} className="text-sm sm:text-base">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.quantity || 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 font-medium hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
