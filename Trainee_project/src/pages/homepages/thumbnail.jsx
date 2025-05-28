import React from "react";
import thumbcover from "../../assets/thumbcover.jpg";
import { Link } from "react-router-dom";

const Thumbnail = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-8 py-12 max-w-7xl mx-auto">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={thumbcover}
          alt="Thumbnail"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Classic Collection
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Elevate your everyday look with timeless silhouettes and effortless
          textures. From relaxed fits to refined layers, each piece is crafted
          for comfort and confidence. Explore a collection where modern design
          meets classic detail — made to move with you, styled to stand out.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Step into style that feels as good as it looks. Thoughtfully designed
          with your lifestyle in mind, our latest collection blends clean lines
          with soft fabrics for a look that’s as versatile as it is polished.
          Whether you're dressing up or keeping it casual, each piece adds a
          touch of effortless sophistication to your day.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Redefine your wardrobe with pieces that speak to timeless elegance.
          Rich textures, neutral tones, and tailored silhouettes come together
          to create looks that are both elevated and easygoing. Perfect for
          layering or standing alone, these designs bring balance to your closet
          — and confidence to every outfit.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Where simplicity meets statement. Our collection is curated to make
          everyday dressing easier, without compromising on style. From
          structured essentials to flowing forms, every item is made to
          transition seamlessly through your day — delivering comfort,
          durability, and undeniable presence.
        </p>
        <Link to="/Categories" className="bg-amber-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-amber-600 transition duration-300">
          <button >
            Shop Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thumbnail;
