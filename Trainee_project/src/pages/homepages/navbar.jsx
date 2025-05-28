import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-stone-600 flex justify-between text-white items-center px-6 py-3' style={{padding:"12px", position:"fixed", top:"0", zIndex:"99", width:"100%"}}>
      <div className="text-2xl font-bold">Style<span className="text-amber-500">Verse</span></div>

      <div>
        <ul className='flex gap-6 items-center font-semibold'>
         <Link to="/" className="hover:text-amber-500">Home</Link>

          {/* Categories dropdown on hover */}
          <li className="relative group cursor-pointer">
            <Link to="/Categories" className="hover:text-amber-500">Categories</Link>
            {/* <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg">
              <ul className="space-y-1">
                <Link to="/Men"><li>Men</li></Link>
                <Link to="/Women"><li>Women</li></Link>
                <Link to="/Kid"><li>Kids</li></Link>
              </ul>
            </div> */}
          </li>

          <Link to="/Contact" className="hover:text-amber-500"><li>Contact</li></Link>
          <Link to="/Blog" className="hover:text-amber-500"><li>Blog</li></Link>
        </ul>
      </div>

      <div className='flex gap-4'>
        <Link to="/Wishlist" className="hover:text-amber-500"> <i className="fa-solid fa-heart"></i></Link>
        <Link to="/Signup" className="hover:text-amber-500"><i className="fa-solid fa-user"></i></Link>
        <Link to="/Cart" className="hover:text-amber-500"><i className="fa-solid fa-cart-shopping"></i></Link>
      </div>
    </div>
  );
};

export default Navbar;
