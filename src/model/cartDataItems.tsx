import ProductsType from "./productType";

export interface cartDataItems {
  items: [];
  total: number;
  subTotal: number;
  tax: number;
  product: ProductsType[];
  id: number;
  name: string;
  imageName: string;
  image: string;
  price: number;
  discountRate: number;
  review: number;
  cartId: string[];
  email: string;
  phone: string;
  note: string;
  billingAdress: {};
  civility: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  street: string;
  companyName: string;
  country: string;
  city: string;
  payment_method: string;
}

export default cartDataItems;
