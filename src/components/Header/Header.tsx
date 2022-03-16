import React from "react";
import logo from "./../../assets/img/logo.png";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./../../css/style.css";

const Header: React.FC = () => {
  const styles: React.CSSProperties = {};

  return (
    <div style={styles}>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo" style={{ width: "100px", height: "100px" }}>
                <h1>
                  <Link to={`/`}>
                    <img src={logo} alt="logo" />
                  </Link>
                </h1>
              </div>
            </div>
            <SearchBar />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
