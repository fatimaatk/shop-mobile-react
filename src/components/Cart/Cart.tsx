import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";

import { useAppSelector } from "../../store/hook";

import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import ProductCardInCart from "./ProductCardInCart";

const Cart: React.FC = () => {
  const cartItem = useAppSelector((state) => state.cartItem);

  const totalOrder: number = (cartItem.totalAmount * 120) / 100;
  const subTotalOrder: number = cartItem.totalAmount;

  const items = cartItem.items;

  const [randomProducts, setRandomProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    let randomProduct1: ProductsType = await data[
      Math.floor(Math.random() * data.length)
    ];
    let randomProduct2: ProductsType = await data[
      Math.floor(Math.random() * data.length)
    ];
    setRandomProducts([randomProduct1, randomProduct2]);
  };

  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-content-right">
              <div className="woocommerce">
                {items.length > 0 ? (
                  <table className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-remove">Remove</th>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, i) => (
                        <CartProduct
                          product={item.product}
                          qty={item.qty}
                          key={i}
                        />
                      ))}

                      <tr>
                        <td className="actions" colSpan={6}>
                          <Link to={"/checkout"}>
                            <input
                              type="button"
                              defaultValue="Checkout"
                              name="proceed"
                              className="checkout-button button alt wc-forward"
                            />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="mb-5">
                    <h2 style={{ color: "#5a88ca" }}>YOUR CART IS EMPTY ...</h2>
                  </div>
                )}
                <div className="cart-collaterals">
                  <div className="cross-sells">
                    <h2>You may be interested in...</h2>
                    <ul className="products">
                      {randomProducts &&
                        randomProducts.map((product, i) => (
                          <ProductCardInCart product={product} key={i} />
                        ))}
                    </ul>
                  </div>

                  {items.length > 0 ? (
                    <CartTotal
                      totalOrder={totalOrder}
                      subTotalOrder={subTotalOrder}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
