import React from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";

export const BrandCategories: React.FC<{ brand: ProductsType }> = (props) => {
  const { brand } = props;

  return (
    <div>
      {" "}
      <li>
        <Link to={`/products/${brand.productListId}`}>{brand.name}</Link>
      </li>
    </div>
  );
};
