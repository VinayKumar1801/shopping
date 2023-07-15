import React, { useEffect, useState } from "react";
import ProductList from "../details/ProductList";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import axios from "axios"
import Navbar from '../../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


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
          <MdOutlineNotifications size={24} />
          </Link>
        </div>
      </div>
      <SearchBar />
      <ProductList products={products} loading={loading} />
      <Navbar/>
    </div>
  );
};

export default Home;
