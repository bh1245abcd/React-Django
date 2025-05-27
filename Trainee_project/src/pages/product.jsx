import React, { useState } from "react";
const product = () => {
  const [images, setImages] = useState({
    img1: "../../public/image1.jpg",
    img2: "../../public/image2.jpg",
    img3: "../../public/image3.jpg",
    img4: "../../public/image4.jpg",
    img5: "../../public/image5.jpg",
  });

  const [activeImg, setActiveImg] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="max-w-5xl mx-auto p-4" style={{ padding: "16px", margin:" 0 auto" }}>
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div className="shadow-sm">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-row justify-between h-25">
            <div className="border-gray-200 border-1">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img1)}
              />
            </div>
            <div className="border-gray-200 border-1">
              <img
                src={images.img2}
                alt=""
                className="w=24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img2)}
              />
            </div>
            <div className="border-gray-200 border-1">
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img3)}
              />
            </div>
            <div className="border-gray-200 border-1">
              <img
                src={images.img4}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img4)}
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold">
              Special T-shirt
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsum commodi eveniet qui doloribus delectus quo natus rerum itaque,
            laudantium, autem aliquam labore sequi velit alias nam consectetur
            laborum doloremque!
          </p>
          <h6 className="text-2xl font-semibold">$ 199.00</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-100 py-4 px-6 rounded-lg text-violet-800 text-3xl"
                style={{ padding: "0px 10px 4px" }}
                onClick={() => setAmount(amount - 1)}
              >
                -
              </button>
              <span className=" rounded-lg" style={{ padding: "4px 12px" }}>
                {amount}
              </span>
              <button
                className="bg-gray-100 py-4 px-6 rounded-lg text-violet-800 text-3xl"
                style={{ padding: "0px 10px 4px" }}
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl h-full"
              style={{ padding: "6px 35px" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
