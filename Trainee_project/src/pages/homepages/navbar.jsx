import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-stone-600 flex justify-between text-white items-center px-6 py-3' style={{padding:"12px"}}>
      <div className="text-2xl font-bold">ARIT</div>

      <div>
        <ul className='flex gap-6 items-center'>
          <li>Home</li>

          {/* Categories dropdown on hover */}
          <li className="relative group cursor-pointer">
            <Link to="/Categories">Categories</Link>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg">
              <ul className="space-y-1">
                <Link to="/Men"><li>Men</li></Link>
                <Link to="/Women"><li>Women</li></Link>
                <Link to="/Kid"><li>Kids</li></Link>
              </ul>
            </div>
          </li>

          <Link to="/Contact"><li>Contact</li></Link>
          <Link to="/Blog"><li>Blog</li></Link>
        </ul>
      </div>

      <div className='flex gap-4'>
        <Link to="/Wishlist"> <i className="fa-solid fa-heart"></i></Link>
        <Link to="/Signup"><i className="fa-solid fa-user"></i></Link>
        <Link to="/Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
      </div>
    </div>
  );
};

export default Navbar;
