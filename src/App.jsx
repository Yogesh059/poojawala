import React from 'react';
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { Navigate, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from 'react-redux';
import Orders from './pages/Orders';
import Video from './pages/Video';
import Donation from "./pages/Donation";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/Video" element={<Video />} />
        <Route path='/Donation' element={<Donation />} />
      </Routes>
    </>
  )
}

export default App;
