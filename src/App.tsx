import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import HomeMain from "./components/HomeMain/HomeMain";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/Product/ProductDetails";
import AllProductsList from "./components/ProductsList/AllProductsList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App: React.FC<React.ReactNode> = () => {
  return (
    <Router>
      <Fragment>
        <Header />

        <NavBar />

        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/products/:id" element={<ProductsList />}></Route>
          <Route path="/products" element={<AllProductsList />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
