import kids from "../kid";

const Kid = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6 text-center">kid's Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {kids.map((product) => (
        <ul>
          <li><p>{product.name}</p></li>
          <li><p>{product.price}</p></li>
        </ul>
      ))}
    </div>
  </div>
);

export default Kid