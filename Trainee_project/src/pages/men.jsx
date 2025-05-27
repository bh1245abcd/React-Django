import mendata from '../men.js';

const Men = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Men's Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mendata.map((product) => (
        <ul>
          <img src={product.image} alt="" />
          <li><p>{product.name}</p></li>
          <li><p>{product.price}</p></li>
        </ul>
      ))}
    </div>
  </div>
);

export default Men