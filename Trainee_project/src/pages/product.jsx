import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const selectedImage = location.state?.selectedImage;

  const [images, setImages] = useState({
    img1: "/image1.jpg",
    img2: "/image2.jpg",
    img3: "/image3.jpg",
    img4: "/image4.jpg",
    img5: "/image5.jpg",
  });

  const [activeImg, setActiveImg] = useState(selectedImage || "/image1.jpg");

  useEffect(() => {
    if (selectedImage) {
      setActiveImg(selectedImage);
    }
  }, [selectedImage]);

  const [amount, setAmount] = useState(1);

  return (
    <div className="max-w-5xl mx-auto p-10 my-10">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        {/* Image Section */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div className="shadow-sm">
            <img
              src={activeImg}
              alt="Product"
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
          </div>
          {/* <div className="flex flex-row justify-between h-25">
            {[images.img1, images.img2, images.img3, images.img4].map((img, idx) => (
              <div key={idx} className="border border-gray-200">
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImg(img)}
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold">Special T-shirt</span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsum commodi eveniet qui doloribus delectus quo natus rerum itaque,
            laudantium, autem aliquam labore sequi velit alias nam consectetur
            laborum doloremque!
          </p>
          <h6 className="text-2xl font-semibold">$199.00</h6>

          {/* Quantity + Cart Button */}
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-100 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => amount > 1 && setAmount(amount - 1)}
              >
                -
              </button>
              <span className="px-4">{amount}</span>
              <button
                className="bg-gray-100 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
