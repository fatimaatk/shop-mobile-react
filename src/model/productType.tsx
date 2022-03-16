export interface ProductsType {
  id: number;
  name: string;
  imageName: string;
  price: number;
  discountRate: number;
  review: number;
  description: string;
  item: [];
  brand: string;
  productListId: number;
  brandName: string;
  loading: boolean;
}

export default ProductsType;
