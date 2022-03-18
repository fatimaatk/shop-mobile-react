import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductsType from "../../model/productType";
import Pagination from "./Pagination";

const TopNewList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/top-new-products`);
    const data = await response.json();
    setProducts(data);
  };

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts: ProductsType[] = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2 className="text-capitalize">Top New Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area ">
        <div className="zigzag-bottom "></div>
        <div className="container ">
          <div className="row ">
            {currentProducts.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Pagination
            productPerPage={productPerPage}
            totalProducts={products.length}
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNewList;
