import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import HomeMain from "./components/HomeMain/HomeMain";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/Product/ProductDetails";
import TopSellersList from "./components/ProductsList/TopSellersList";
import TopNewList from "./components/ProductsList/TopNewList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
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
          <Route path="/products/new-sellers" element={<TopNewList />}></Route>
          <Route
            path="/products/top-sellers"
            element={<TopSellersList />}
          ></Route>
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
