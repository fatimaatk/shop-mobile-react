import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WidgetNew from "./WidgetNew";
import WidgetsRecents from "./WidgetsRecents";
import WidgetsTop from "./WidgetsTop";

const WidgetArea = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    getTopProducts();
    getNewProducts();
  }, []);

  const getTopProducts = async () => {
    const response = await fetch(`http://localhost:3000/top-sellers-products`);
    const data = await response.json();
    setTopProducts(data);
  };

  const getNewProducts = async () => {
    const response = await fetch(`http://localhost:3000/top-new-products`);
    const data = await response.json();
    setNewProducts(data);
  };

  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top Sellers</h2>
              <Link to={`/products`} className="wid-view-more ">
                View All
              </Link>
              {topProducts.map((product, i) => (
                <WidgetsTop product={product} key={i} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Recently Viewed</h2>
              <Link to={`/products`} className="wid-view-more">
                View All
              </Link>
              <WidgetsRecents />
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top New</h2>
              <Link to={`/products`} className="wid-view-more">
                View All
              </Link>

              {newProducts.map((product, i) => (
                <WidgetNew product={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetArea;
