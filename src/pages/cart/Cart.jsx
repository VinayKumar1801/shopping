import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/cartSlice/cartSlice";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Bell from "../../assests/bell.png";
import CheckOut from "../../components/CheckOut";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(Math.floor(Math.random() * 100));

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    console.log(itemId, newQuantity);
    dispatch(updateQuantity({ itemId, quantity: newQuantity }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return Math.floor(totalPrice);
  };

  return (
    <div className="p-4 border border-gray-200 rounded shadow container mx-auto ">
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <Link to="/">
          <div className="flex items-center">
            <IoMdArrowRoundBack size={24} />
          </div>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          My Cart
        </h1>
        <div className="flex items-center">
          <Link to="/cart">
            {/* <MdOutlineNotifications size={24} />
             */}
            <img src={Bell} alt="bell" srcset="" />
          </Link>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((product) => (
                <li
                  key={product.id}
                  style={{ backgroundColor: "#F2F2F2" }}
                  className="flex p-6 rounded"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.image}
                      alt={product.image}
                      className="h-24 w-24"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <BsTrash3
                            size={25}
                            className="text-red-500 bg-white rounded-lg p-1"
                          />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Size {product.size}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500 font-medium">
                        INR {product.price}
                      </p>

                      <div className="flex items-center">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500 border border-gray-300 rounded-md px-2 py-1 mr-1"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity - 1
                            )
                          }
                          disabled={product.quantity === 1}
                        >
                          -
                        </button>
                        <p className="mx-1">{product.quantity}</p>
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500 border border-gray-300 rounded-md px-2 py-1 ml-1"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <div className="mx-auto max-w-2xl mx-4 my-9 px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <div>
            <input
              type="text"
              placeholder="Add a voucher"
              className="flex-grow px-5 py-3 rounded w-full outline-none bg-gray-100"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-500">Sub-total</p>
            <p className="font-semibold">INR {getTotalPrice().toFixed(2)}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-500">VAT (%)</p>
            <p className="font-semibold">INR 0.00</p>
          </div>
          <div className="mt-4 flex justify-between items-center mb-4">
            <p className="text-gray-500">Shipping fee</p>
            <p className="font-semibold">INR {shipping}</p>
          </div>
          <hr />
          <div className="mt-4 flex justify-between items-center">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">
              INR {getTotalPrice() + Number(shipping.toFixed(2))}
            </p>
          </div>
        </div>
      )}

      <CheckOut cartItems={cartItems} />
      {/* {cartItems.length === 0 ? (
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
      )} */}
    </div>
  );
};

export default Cart;
