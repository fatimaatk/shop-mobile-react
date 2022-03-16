import React from "react";
import "./../../css/style.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";

const CartButton = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <Link to={`/cart`}>
          Cart : <span className="cart-amunt">{cart.totalAmount}€</span>{" "}
          <i className="fa fa-shopping-cart"></i>{" "}
          <span className="product-count">{cart.qty}</span>
        </Link>
      </div>
    </div>
  );
};

export default CartButton;
