import React from "react";
import { useState, useEffect } from "react";
import ProductsType from "../../model/productType";
import ProductCardInCart from "./ProductCardInCart";

const ProductInterested = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    setProducts(data);
  };

  const randomProducts: ProductsType[] = [];

  let randomProduct1: ProductsType =
    products[Math.floor(Math.random() * products.length)];

  let randomProduct2: ProductsType =
    products[Math.floor(Math.random() * products.length)];

  randomProducts.push(randomProduct1, randomProduct2);

  return (
    <div className="cross-sells">
      <h2>You may be interested in...</h2>
      <ul className="products">
        {randomProducts
          ? randomProducts.map(
              (product, i) =>
                product && <ProductCardInCart product={product} key={i} />
            )
          : null}
      </ul>
    </div>
  );
};

export default ProductInterested;
