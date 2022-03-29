import React from "react";
import { Link } from "react-router-dom";
import folderTitle from "../../hooks/folderTitle";
import CookiesType from "../../model/cookiesType";

const Recent: React.FC<{ cookie: CookiesType }> = (props) => {
  const { cookie } = props;

  const imageLink = folderTitle(cookie.name) + cookie.image;

  let discountAmount: number = (cookie.price * cookie.discountRate) / 100;
  return (
    <div>
      {" "}
      <div className="thubmnail-recent">
        <img src={`/images/${imageLink}`} className="recent-thumb" alt="" />
        <h2>
          <Link
            to={`/product/${cookie.id}`}
            className="text-capitalize text-decoration-none"
          >
            {cookie.name}
          </Link>
        </h2>
        <div className="product-sidebar-price">
          <ins>{cookie.price.toFixed(2)} € </ins>{" "}
          <del>{discountAmount.toFixed(2)} €</del>
        </div>
      </div>
    </div>
  );
};

export default Recent;
