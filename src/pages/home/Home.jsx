import React, { useEffect, useState } from "react";
import ProductList from "../details/ProductList";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import axios from "axios"
import Navbar from '../../components/Navbar';
import Bell from "../../assests/bell.png"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [selectedSize, setSelectedSize] = useState(null);

   const handleSizeSelection = (size) => {
     setSelectedSize(size);
   };


  useEffect(() => {
    async function fetchData() {
      const res = await axios("https://fakestoreapi.com/products");
      setProducts(res.data);
      setLoading(false)
    }
    fetchData();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between align-center items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          <Link to="/">Discover</Link>
        </h1>
        <div className="flex items-center">
          <Link to="/cart">
            <img src={Bell} alt="bell" srcset="" />
          </Link>
        </div>
      </div>
      <SearchBar />
      <div className="flex justify-center">
            <div className="flex gap-5 mt-2">
          <div
            className={`border ${
              selectedSize === "all" ? "text-white bg-black" : "bg-white"
            } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
            onClick={() => handleSizeSelection("all")}
          >
            <span>All</span>
          </div>
          <div
            className={`border ${
              selectedSize === "men" ? "text-white bg-black" : "bg-white"
            } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
            onClick={() => handleSizeSelection("men")}
          >
            <span>Men</span>
          </div>
          <div
            className={`border ${
              selectedSize === "women" ? "text-white bg-black" : "bg-white"
            } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
            onClick={() => handleSizeSelection("women")}
          >
            <span>Women</span>
          </div>
          <div
            className={`border ${
              selectedSize === "kids" ? "text-white bg-black" : "bg-white"
            } rounded-lg flex items-center justify-center py-2 px-4 cursor-pointer`}
            onClick={() => handleSizeSelection("kids")}
          >
            <span>Kids</span>
          </div>
        </div>
      </div>
      <ProductList products={products} loading={loading} />
      <Navbar />
    </div>
  );
};

export default Home;
