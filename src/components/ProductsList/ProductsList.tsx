import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductsType from "../../model/productType";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./../../css/style.css";

const ProductsList: React.FC = () => {
  const [productsBrand, setProductsBrand] = useState([]);
  const [brandName, setBrandName] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/products-lists/${id}`);
    const data = await response.json();
    setProductsBrand(data.items);
    setBrandName(data.name);
  };

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts: ProductsType[] = productsBrand.slice(
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
                <h2 className="text-capitalize">{brandName}</h2>
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
              <ProductCard product={product} key={i} brandName={brandName} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Pagination
            productPerPage={productPerPage}
            totalProducts={productsBrand.length}
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
