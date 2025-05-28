import { Link } from 'react-router-dom';
import women from '../women.js'

const Women = () => (
  <div className="p-8 my-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Women's Products</h2>
    <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
  {women.map((product, index) => (
    <div
      key={index}
      className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
    >
      <Link to="/product" key={index} state={{ selectedImage: product.image }}>
      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full object-top"
      />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-violet-700 font-bold text-xl">${product.price}</p>
      </div>
    </div>
  ))}
</div>
  </div>
);

export default Women