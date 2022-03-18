import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";
import "./../../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [products, setProducts] = useState<any[]>([]);

  const [filteredData, setFilteredData] = useState<ProductsType[]>([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    getFilter();
  }, [wordEntered]);

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

  //méthode recherche image
  const folderTitle = (name: string) => {
    if (name.includes("apple")) {
      return "products-img/Apple";
    } else if (name.includes("huawei")) {
      return "products-img/Huawei";
    } else if (name.includes("lg")) {
      return "products-img/LG";
    } else if (name.includes("samsung")) {
      return "products-img/Samsung";
    } else if (name.includes("sony")) {
      return "products-img/Sony";
    }
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
                onClick={clearInput}
                className="text-decoration-none"
                target="_blank"
              >
                <div
                  key={i}
                  className="text-capitalize list-group-item list-group-item-action d-flex justify-content-between"
                >
                  <img
                    src={`/images/${folderTitle(value.name)}/${
                      value.imageName
                    }`}
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
