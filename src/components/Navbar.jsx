import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white text-black p-4 border-t border-gray-300">
      <div className="flex justify-between">
        <Link
          to="/"
          className="flex flex-col items-center text-lg font-semibold"
        >
          <AiOutlineHome size={20} color="black" />
          Home
        </Link>
        <Link
          to="/saved"
          className="flex flex-col items-center text-lg font-semibold"
        >
          <AiOutlineHeart size={20} color="black" />
          Saved
        </Link>
        <Link
          to="/cart"
          className="flex flex-col items-center text-lg font-semibold"
        >
          <AiOutlineShoppingCart size={20} color="black" />
          Cart
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center text-lg font-semibold"
        >
          <AiOutlineSetting size={20} color="black" />
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
