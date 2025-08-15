import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import Collections from "./Pages/Collections.jsx";
import Contact from "./Pages/Contact.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import allProducts from "./assets/allProducts.js"; // from dummy js file
import { useDispatch, useSelector } from "react-redux";
import { setProductsInStore } from "./Features/ProductSlice.js";
import DetailProduct from "./Pages/DetailProduct.jsx";
import Login from "./Components/Login.jsx";
import Orders from "./Pages/Orders.jsx";
import Profile from "./Pages/Profile.jsx";
import Cart from "./Pages/Cart.jsx";
import DeliveryAddress from "./Pages/DeliveryAddress.jsx";
import { RxDoubleArrowUp } from "react-icons/rx"; //icon
import TrackOrder from "./Components/TrackOrder.jsx";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { BiErrorAlt } from "react-icons/bi";



const App = () => {
  const disptach = useDispatch();
  const allProductsFromStore = useSelector(
    (state) => state.mySlice.allProducts
  );

  const fetchAllProductHandler = async () => {
    try {
      const respose = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/product/list`
      );

      if (respose.data.success) {
        disptach(setProductsInStore(respose.data.allProducts)); //puting allproducts in Redux Store
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  useEffect(() => {
    fetchAllProductHandler();
  }, []);

  return (
    <>
      <div
        className="mainContainer p-4  sm:p-12 sm:pt-5 flex flex-col justify-start items-center text-sm sm:text-xl w-full min-h-screen bg-[var(--bg-color)]"
        
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="topIcon fixed  md:hidden bottom-4 right-4 w-[15vw] active:bg-[var(--main-color)] h-[15vw] flex justify-center items-center rounded-full bg-gray-800 text-gray-500 shadow-lg hover:scale-105 transition"
        >
          <RxDoubleArrowUp size={24} />
        </button>

        <ToastContainer position="top-right" />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Collections" element={<Collections />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route path="/DetailProduct/:id" element={<DetailProduct />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/DeliveryAddress" element={<DeliveryAddress />}></Route>
          <Route path="/TrackOrder/:id" element={<TrackOrder />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
