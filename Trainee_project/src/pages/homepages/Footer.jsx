import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="flex bg-stone-600 gap-2 text-white" style={{paddingLeft:"40px",paddingTop:"16px"}}>
    
              <div style={{width:"320px"}}>
              <p style={{fontWeight:"bold",fontSize:"24px"}}>ARIT</p>
              <ul>
                <li>Luctus nulla facilisi. Viverra mattis at feugiat euismod. Enim, blandit sed, morbi pulvinar vitae.
                Velit ut amet, dictumst imperdiet sapien. Tristique, est vel, fames sed.</li>
              </ul>
              </div>
    
              <div style={{width:"320px"}}>
                <p style={{fontWeight:"bold",fontSize:"24px"}}>Quick Links</p>
                <ul>
                  <Link to="/about"><li>About Us</li></Link>         
                  <Link to="/contact"><li>Contact Us</li></Link>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/blog"><li>Blog</li></Link>
                </ul>
              </div>
    
              <div style={{width:"320px"}}>
                <p style={{fontWeight:"bold",fontSize:"24px"}}>Help & Info</p>
                <ul>
                  <li>Di<li>Blog</li>claimer</li>
                  <li>Privacy And Policy</li>
                  <li>Terms And Condition</li>
                  <li>Exchange Return</li>
                </ul>
              </div>
    
              <div style={{width:"320px"}}>
                <p style={{fontWeight:"bold",fontSize:"24px"}}>About</p>
                <ul>
                  <li style={{textAlign:"justify"}}>Shop the latest fashion trends with ease at vassae. Discover high-quality clothing for men, women, and kids.
                  Enjoy secure shopping, fast shipping, and exclusive deals. Stay stylish and comfortable with our carefully curated
                  collections. Your style, your way</li>
                  <li></li>
                </ul>
                <p>ARIT48@gmail.com</p>
                <p>+91-12345 67890</p>
                <p>[9:00 to 5:00 pm everyday]</p>
              </div>
    
            </div>
  )
}

export default Footer

 