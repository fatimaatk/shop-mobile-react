import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import ProductsType from "../../model/productType";
import "./../../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import folderTitle from "../../hooks/folderTitle";
const SearchBar = () => {
  const [products, setProducts] = useState<any[]>([]);

  const [filteredData, setFilteredData] = useState<ProductsType[]>([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    getFilter();
  }, [wordEntered]);

  const navigate = useNavigate();

  const getFilter = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    setProducts(data);
  };

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter: any = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="col-sm-4">
      <input
        value={wordEntered}
        onChange={handleFilter}
        type="text"
        style={{ marginTop: "30px", width: "60%" }}
        placeholder="Search products..."
      />

      {filteredData.length === 0 ? (
        <input type="button" value="Search" />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          className="ml-5 cursor-pointer"
          onClick={clearInput}
          style={{
            cursor: "pointer",
            color: "#5a88ca",
          }}
        />
      )}

      {filteredData.length !== 0 && (
        <div className="list-group">
          {filteredData.slice(0, 5).map((value, i) => {
            return (
              <Link
                to={`/product/${value.id}`}
                className="text-decoration-none"
                target={"_blank"}
                onClick={() => {
                  clearInput();
                }}
              >
                <div
                  key={i}
                  className="text-capitalize list-group-item list-group-item-action d-flex justify-content-between"
                >
                  <img
                    src={`/images/${folderTitle(value.name)}/${
                      value.imageName
                    }`}
                    alt=""
                    style={{ width: "10%" }}
                  />
                  <p>{value.name}</p>
                  <p>{value.price.toFixed(2)} €</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
