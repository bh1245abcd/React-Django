import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-700 text-white px-8 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Style<span className="text-amber-500">Verse</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Luctus nulla facilisi. Viverra mattis at feugiat euismod. Enim, blandit sed, morbi pulvinar vitae. Velit ut amet,
            dictumst imperdiet sapien. Tristique, est vel, fames sed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-amber-500 transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-amber-500 transition">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Help & Info</h2>
          <ul className="space-y-2">
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Exchange & Return</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-sm text-justify mb-4 leading-relaxed">
            Shop the latest fashion trends with ease at StyleVerse. Discover high-quality clothing for men, women, and kids.
            Enjoy secure shopping, fast shipping, and exclusive deals. Stay stylish and comfortable with our carefully curated
            collections. Your style, your way.
          </p>
          <p className="text-sm">Email: ARIT48@gmail.com</p>
          <p className="text-sm">Phone: +91-12345 67890</p>
          <p className="text-sm">Hours: 9:00 AM - 5:00 PM daily</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
