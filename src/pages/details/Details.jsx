import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import Spinner from "../../components/Spinner";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching product details:", error);
      }
    }
    fetchData();
  }, [id]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      const productWithSize = {
        ...product,
        size: selectedSize,
      };
      dispatch(addToCart(productWithSize));
      showSuccessAlert();
    }
  };

  const showSuccessAlert = () => {
    toast.success("Item added to cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white">
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white">
          <div className="flex justify-between items-center px-4 py-2 bg-white">
            <Link to="/">
              <div className="flex items-center">
                <IoMdArrowRoundBack size={24} />
              </div>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Details
            </h1>
            <div className="flex items-center">
              <Link to="/cart">
                <MdOutlineNotifications size={24} />
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-2xl mx-4 my-9 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-96 w-96 mx-auto"
                />
                <div className="absolute top-5 right-5">
                  <BsHeart
                    size={35}
                    className="text-black bg-white rounded-lg p-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">
                    <AiFillStar />
                  </span>
                  <span> {product.rating.rate}/5</span>
                  <span>({product.rating.count} reviews)</span>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h2>
                <p className="mt-4 text-gray-700 text-justify">
                  {product.description}
                </p>
                <div>
                  <h2 className="text-xl mt-2 text-gray-900 font-semibold">
                    Choose Size
                  </h2>
                  <div className="flex gap-5 mt-2">
                    <div
                      className={`border ${
                        selectedSize === "S"
                          ? "text-white bg-black"
                          : "bg-white"
                      } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
                      onClick={() => handleSizeSelection("S")}
                    >
                      <span>S</span>
                    </div>
                    <div
                      className={`border ${
                        selectedSize === "M"
                          ? "text-white bg-black"
                          : "bg-white"
                      } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
                      onClick={() => handleSizeSelection("M")}
                    >
                      <span>M</span>
                    </div>
                    <div
                      className={`border ${
                        selectedSize === "L"
                          ? "text-white bg-black"
                          : "bg-white"
                      } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
                      onClick={() => handleSizeSelection("L")}
                    >
                      <span>L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center border">
              <div>
                <p>Price</p>
                <p className="text-lg text-gray-900">INR {product.price}</p>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                  selectedSize
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-300 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
