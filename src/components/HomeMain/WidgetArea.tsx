import React from "react";
import { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
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

  const [cookies] = useCookies(["products"]);
  const myCookies = Object.values(cookies);

  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top Sellers</h2>
              <Link to={`/products/top-sellers`} className="wid-view-more ">
                View All
              </Link>
              {topProducts.splice(0, 3).map((product, i) => (
                <WidgetsTop product={product} key={i} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Recently Viewed</h2>

              <Link to={`/products/recents`} className="wid-view-more">
                View All
              </Link>
              {myCookies &&
                myCookies.map((cookies) =>
                  cookies
                    .filter((value: any) => Object.keys(value).length !== 0)
                    .splice(-3)
                    .map((cookie: any, items: any) => (
                      <WidgetsRecents cookie={cookie} key={items} />
                    ))
                )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top New</h2>
              <Link to={`/products/new-sellers`} className="wid-view-more">
                View All
              </Link>

              {newProducts.splice(0, 3).map((product, i) => (
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
