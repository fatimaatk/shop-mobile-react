import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductsType from "../../model/productType";
import Pagination from "./Pagination";
import { useCookies } from "react-cookie";

const RecentList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  useEffect(() => {
    getData();
  }, []);

  const [cookies] = useCookies(["products"]);
  const myCookies = Object.values(cookies);

  console.log(cookies);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/top-sellers-products`);
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
                <h2 className="text-capitalize">Recently Viewed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area ">
        <div className="zigzag-bottom "></div>
        <div className="container ">
          <div className="row ">
            {myCookies &&
              myCookies.map((cookies) =>
                cookies
                  .filter((value: any) => Object.keys(value).length !== 0)

                  .map((product: any, items: any) => (
                    <ProductCard product={product} key={items} />
                  ))
              )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {currentPage > 1 && (
            <Pagination
              productPerPage={productPerPage}
              totalProducts={products.length}
              currentPage={currentPage}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentList;
