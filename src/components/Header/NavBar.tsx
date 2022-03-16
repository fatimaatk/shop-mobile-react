import React from "react";
import "./../../css/style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuCategories from "./MenuCategories";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(`http://localhost:3000/categories`);
    const data = await response.json();
    setCategories(data);
  };

  return (
    <div className="mainmenu-area">
      <div className="container ">
        <div className="row">
          <div className="navbar navbar-expand" style={{ height: "56px" }}>
            <ul className="nav navbar-nav ">
              <li className="active">
                <Link to={`/`}>Home</Link>
              </li>
              {categories.map((category, i) => (
                <MenuCategories category={category} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
