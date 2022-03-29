import React from "react";
import { Link } from "react-router-dom";
import folderTitle from "../../hooks/folderTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CookiesType from "../../model/cookiesType";

const WidgetsRecents: React.FC<{ cookie: CookiesType }> = (props) => {
  const { cookie } = props;

  let priceNoDiscount: number =
    (props.cookie.price * props.cookie.discountRate) / 100 + props.cookie.price;

  const imageLink = folderTitle(props.cookie.image) + props.cookie.image;

  return (
    <>
      <div className="single-wid-product">
        <Link to={`/product/${cookie.id}`}>
          <img src={`/images/${imageLink}`} alt="" className="product-thumb" />
        </Link>
        <h2>
          <Link
            to={`/product/${cookie.id}`}
            className=" text-capitalize text-decoration-none"
          >
            {cookie.name}
          </Link>
        </h2>
        <div className="product-wid-rating">
          {Array.from({ length: cookie.review }, (_, i) => (
            <FontAwesomeIcon icon={faStar} key={i} />
          ))}
          {props.cookie.review < 5
            ? Array.from({ length: 5 - cookie.review }, (_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} color={"#e3e3e3"} />
              ))
            : null}
        </div>
        <div className="product-wid-price">
          <ins>{props.cookie.price.toFixed(2)}€</ins>
          <del>{priceNoDiscount.toFixed(2)}€</del>
        </div>
      </div>
    </>
  );
};

export default WidgetsRecents;
