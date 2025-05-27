import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import b4 from '../../assets/b4.jpg'
import b5 from '../../assets/b5.jpg'
import b6 from '../../assets/b6.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const images = [b1,b2,b3,b4,b5,b6];

const Bselling = () => {

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
    <div className="flex flex-col  mt-10">

      <div className="flex justify-between items-center"
       style={{marginLeft:"90px",marginRight:"90px",marginTop:"32px",marginBottom:"10px"}}>
      <p className="font-semibold text-[32px]">Our Best seller</p>
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
            <Link to="/product"><img
              key={index}
              src={imgSrc}
              alt={`Image ${startIndex + index + 1}`}
              className="w-[310px] h-[310px] object-container rounded shadow-lg"
            /></Link>
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

  )
}

export default Bselling

 