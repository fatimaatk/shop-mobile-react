import React from "react";
import "./../../css/style.css";
const SearchBar = () => {
  return (
    <div className="col-sm-4">
      <input
        type="text"
        style={{ marginTop: "30px" }}
        placeholder="Search products..."
      />
      <input type="button" value="Search" />
    </div>
  );
};

export default SearchBar;
