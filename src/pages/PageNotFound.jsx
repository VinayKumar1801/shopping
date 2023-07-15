import React, { useEffect } from 'react'
import Page from "../assests/page.jpg"
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
 const navigate = useNavigate();

 useEffect(() => {
   const timer = setTimeout(() => {
     navigate("/");
   }, 5000);

   return () => clearTimeout(timer);
 }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={Page} alt="pagenotfound" className="w-3/4" />
    </div>
  );
}

export default PageNotFound