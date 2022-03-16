import React from "react";
import { Link } from "react-router-dom";
export interface CategoryProps {
  id: number;
  name: string;
  productListId: string;
}

const MenuCategories: React.FC<{ category: CategoryProps }> = (props) => {
  const { category } = props;

  return (
    <li className="active">
      <Link to={`/products/${category.productListId}`}>{category.name}</Link>
    </li>
  );
};

export default MenuCategories;
