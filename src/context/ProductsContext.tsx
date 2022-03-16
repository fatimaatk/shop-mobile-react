import { createContext } from "react";

export interface ProductsContextType {
  id: number;
  name: string;
  imageName: string;
  price: number;
  discountRate: number;
  review: number;
  description: string;
}

export interface ArrayProducts {
  products: ProductsContextType[];
}

const ProductsContext = createContext<ArrayProducts | null>(null);

export default ProductsContext;
