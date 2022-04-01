import React from "react";
import "./../../css/style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MenuCategories from "./MenuCategories";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../store/CategoriesSlice";
import { RootState } from "../../store/store";

const NavBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    categories.length === 0 && dispatch(getCategories());
  }, []);

  return (
    <div className="mainmenu-area">
      <div className="container ">
        <div className="row">
          <div className="navbar navbar-expand" style={{ height: "56px" }}>
            <ul className="nav navbar-nav ">
              <li className="active">
                <Link to={`/`}>Home</Link>
              </li>
              {categories.map((category: any, i: number) => (
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
