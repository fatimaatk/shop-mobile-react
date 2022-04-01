import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

import ProductsType from "../../model/productType";
import ProductCard from "../ProductsList/ProductCard";
import Pagination from "../ProductsList/Pagination";
import getProducts from "../../store/ProductsSlice";

const ProductsListSearch = () => {
  const dispatch = useDispatch();
  const { result }: any = useParams();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    products.length === 0 && dispatch(getProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  const filteredData: ProductsType[] = products.filter((value) => {
    return value.name.toLowerCase().includes(result.toLowerCase());
  });

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts: ProductsType[] = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  console.log(products);

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2 className="text-capitalize">Your research : {result}</h2>
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
            totalProducts={filteredData.length}
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsListSearch;
