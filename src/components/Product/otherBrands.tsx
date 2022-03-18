import React from "react";
import { Link } from "react-router-dom";
import ProductsType from "../../model/productType";

const OtherBrands: React.FC<{ brand: ProductsType; categoryName: string }> = (
  props
) => {
  const { brand, categoryName } = props;

  return (
    <div>
      {" "}
      <li>
        <Link
          to={`/products/${brand.productListId}`}
          className="text-capitalize text-decoration-none"
        >
          {brand.name}
        </Link>
      </li>
    </div>
  );
};

export default OtherBrands;
