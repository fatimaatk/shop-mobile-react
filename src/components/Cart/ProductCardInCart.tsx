import React from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";
import "./../../css/style.css";
import { cartItems, addItemToCart } from "../../store/CartTotalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const ProductCardInCart: React.FC<{ product: ProductsType }> = (props) => {
  const { product } = props;
  //REDUX
  const cartItem = useAppSelector((state) => state.cartItem);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(
      addItemToCart({
        product,
      })
    );
  };

  //Methode recherche image
  const folderTitle = (name: string) => {
    if (name.includes("apple")) {
      return "products-img/Apple/";
    } else if (name.includes("huawei")) {
      return "products-img/Huawei/";
    } else if (name.includes("lg")) {
      return "products-img/LG/";
    } else if (name.includes("samsung")) {
      return "products-img/Samsung/";
    } else if (name.includes("sony")) {
      return "products-img/Sony/";
    }
  };

  const imageLink = folderTitle(product.name) + product.imageName;

  return (
    <>
      <li className="product">
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <img
            width="300"
            height="300"
            alt="T_4_front"
            className="attachment-shop_catalog wp-post-image"
            src={`/images/${imageLink}`}
          />
          <h3 className="text-capitalize ">{product.name}</h3>
          <span className="price">
            <span className="amount">20.00 €</span>
          </span>
        </Link>

        <button className="add_to_cart_button" onClick={incrementHandler}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default ProductCardInCart;
