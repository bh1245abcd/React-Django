
import React from 'react'
import { useEffect, useState } from 'react';

import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'

const images = [c1, c2, c3, c4];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
     <div
      className="slider"
      style={{
        width: "100%",
        height: "320px",
        overflow: "hidden"
      }}
    >
      <img
        alt=""
        src={images[currentIndex]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "",
          objectPosition: "center",
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>

  )
}

export default Slider

 