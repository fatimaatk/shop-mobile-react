import React from "react";
import { Link } from "react-router-dom";

import { ItemType } from "../../store/CartTotalSlice";

import { useAppSelector, useAppDispatch } from "../../store/hook";
import {
  addItemToCart,
  removeItemToCart,
  removeItem,
} from "../../store/CartTotalSlice";

const CartProduct: React.FC<{
  product: ItemType;
  qty: number;
}> = (props) => {
  const { product, qty } = props;

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

  const folderLink = folderTitle(product.name);

  const price = product.price.toFixed(2);
  const pricePerQty = product.price * qty;

  const cartItem = useAppSelector((state) => state.cartItem);
  const dispatch = useAppDispatch();

  const incrementHandlerQty = () => {
    dispatch(
      addItemToCart({
        product,
      })
    );
  };

  const removeHandlerProduct = () => {
    dispatch(
      removeItemToCart({
        product,
      })
    );
  };

  const removeHandlerItem = () => {
    dispatch(
      removeItem({
        product,
      })
    );
  };

  const inputChangeHandler = (e: any) => {
    const updateValue = e.target.value;
  };
  return (
    <tr className="cart_item">
      <td className="product-remove">
        <button
          onClick={removeHandlerItem}
          className="remove text-decoration-none"
        >
          x
        </button>
      </td>

      <td className="product-thumbnail">
        <Link to={`/product/${product.id}`}>
          <img
            width="145"
            height="145"
            alt="poster_1_up"
            className="shop_thumbnail"
            src={`/images/${folderLink}/${product.imageName}`}
          />
        </Link>
      </td>

      <td className="product-name">
        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-capitalize"
        >
          {product.name}
        </Link>
      </td>

      <td className="product-price">
        <span className="amount">{price} €</span>
      </td>

      <td className="product-quantity">
        <div className="quantity buttons_added">
          {qty > 0 ? (
            <input
              type="button"
              className="minus"
              defaultValue="-"
              onClick={removeHandlerProduct}
            />
          ) : (
            <input type="button" className="minus" defaultValue="-" />
          )}

          <input
            type="number"
            className="input-text qty text"
            title="Qty"
            min="0"
            step="1"
            value={qty}
            onChange={(e) => inputChangeHandler(e)}
          />
          <input
            type="button"
            className="plus"
            defaultValue="+"
            onClick={incrementHandlerQty}
          />
        </div>
      </td>

      <td className="product-subtotal">
        <span className="amount">{pricePerQty} €</span>
      </td>
    </tr>
  );
};

export default CartProduct;
