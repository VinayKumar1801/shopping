import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const CheckOut = ({cartItems}) => {
    // console.log(cartItems)
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center border">
          <Link to="/">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span>Continue Shopping </span>
              <span className="ml-2">
                <FiShoppingCart />
              </span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center border">
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            style={{ width: "60%" }}
          >
            <span>Checkout</span>
            <span className="ml-2">
              <BsArrowRight />
            </span>
          </button>
        </div>
      )}
    </>
  );
}

export default CheckOut