import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { BsHeart } from "react-icons/bs";



const ProductList = ({ products,loading }) => {

  return (
    <div style={{ marginTop: "-90px" }} className="bg-white">
      <div className="mx-auto max-w-2xl mx-4 my-9 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`}>
                <div key={product.id} className="group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.image}
                      className="group-hover:opacity-75 h-64 w-64 mx-auto"
                    />
                    <div className="absolute top-5 right-5">
                      <BsHeart
                        size={35}
                        className="text-black bg-white rounded-lg p-1"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    INR{" "}
                    <span className="mt-4 text-lg text-gray-700">
                      {product.price}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
