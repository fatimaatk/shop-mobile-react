import React from "react";
import "./../../css/style.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";

const CartButton = () => {
  const cartItem = useAppSelector((state) => state.cartItem);

  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <Link to={`/cart`}>
          Cart : <span className="cart-amunt">{cartItem.totalAmount}€</span>{" "}
          <i className="fa fa-shopping-cart"></i>{" "}
          <span className="product-count">{cartItem.totalqty}</span>
        </Link>
      </div>
    </div>
  );
};

export default CartButton;
