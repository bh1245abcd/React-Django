import React from 'react';
import thumbcover from '../../assets/thumbcover.jpg';

const Thumbnail = () => {
  return (
    <div className="flex gap-4" style={{marginLeft:"90px",marginTop:"32px"}}>
      <div>
        <img src={thumbcover} alt="Thumbnail" width="520px" />
      </div>
      <div style={{width:"820px"}}>
        <h1 className=" font-semibold text-justify" style={{fontSize:"40px"}}>Classic Collection</h1>
        <p>Elevate your everyday look with timeless silhouettes and effortless textures. 
        From relaxed fits to refined layers, each piece is crafted for comfort and confidence. 
        Explore a collection where modern design meets classic detail — made to move with you, 
        styled to stand out.</p>
        <br /><br />
        <p>Step into style that feels as good as it looks. Thoughtfully designed with your lifestyle in mind,
        our latest collection blends clean lines with soft fabrics for a look that’s as versatile as it is polished.
        Whether you're dressing up or keeping it casual, each piece adds a touch of effortless sophistication to your 
        day.</p>
        <br /><br />
        <p>Redefine your wardrobe with pieces that speak to timeless elegance. Rich textures, neutral tones, and tailored 
        silhouettes come together to create looks that are both elevated and easygoing. Perfect for layering or standing 
        alone, these designs bring balance to your closet — and confidence to every outfit.</p>
        <br /><br />
        <p>Where simplicity meets statement. Our collection is curated to make everyday dressing easier, without
        compromising on style. From structured essentials to flowing forms, every item is made to transition seamlessly 
        through your day — delivering comfort, durability, and undeniable presence</p>
        <button>Shop collection</button>
      </div>
    </div>
  );
};

export default Thumbnail;
