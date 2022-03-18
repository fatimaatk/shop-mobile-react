import React from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WidgetNew: React.FC<{ product: ProductsType }> = (props) => {
  const { product } = props;

  //Calcul prix remisé
  let priceNoDiscount: number =
    (product.price * product.discountRate) / 100 + product.price;

  //Methode recherche image
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
  const imageLink = folderTitle(product.name);

  return (
    <>
      <div className="single-wid-product">
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <img
            src={`/images/${imageLink}/${product.imageName}`}
            alt=""
            className="product-thumb"
          />
          <h2 className="text-dark text-capitalize">{product.name}</h2>
        </Link>
        <div className="product-wid-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="product-wid-price">
          <ins>${product.price.toFixed(2)}</ins>
          <del>${priceNoDiscount.toFixed(2)}</del>
        </div>
      </div>
    </>
  );
};

export default WidgetNew;
