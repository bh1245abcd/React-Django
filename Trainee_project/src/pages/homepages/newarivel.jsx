import { useState,useEffect } from 'react';
import first from '../../assets/none.jpg';
import second from '../../assets/ntwo.jpg';
import three from '../../assets/nthree.jpg';
import four from '../../assets/nfour.jpg';
import five from '../../assets/nfive.jpg';
import six from '../../assets/nix.jpg';
import { Link } from 'react-router-dom';
const images = [first, second, three, four, five, six];
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
const image = [c1, c2, c3, c4];

const Newarivel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col">

    <div className="flex justify-between items-center"
     style={{marginLeft:"90px",marginRight:"90px",marginTop:"32px",marginBottom:"10px"}}>
      <p className="font-semibold text-[32px]">Our New Arrivals</p>
      <Link to="/product"><p className="text-blue-600 cursor-pointer hover:underline">View All Products</p></Link>
    </div>

      {/* Slider with buttons */}
      <div
        className="flex items-center justify-center space-x-4"
        style={{ marginBottom: '40px' }}
      >
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-xl disabled:opacity-50"
        >
          <i className="fa-solid fa-circle-left"></i>
        </button>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-4">
          {images.slice(startIndex, startIndex + visibleCount).map((imgSrc, index) => (
        <Link to="/product" state={{ selectedImage: imgSrc }} key={index}>
            <img
              
              src={imgSrc}
              alt={`Image ${startIndex + index + 1}`}
              className="w-[310px] h-[310px] object-container rounded shadow-lg"
            />
          </Link>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= images.length}
          className="text-xl disabled:opacity-50"
        >
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Newarivel;
