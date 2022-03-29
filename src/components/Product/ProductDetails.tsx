import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ProductsType from "../../model/productType";
import CookiesType from "../../model/cookiesType";

import { useAppSelector, useAppDispatch } from "../../store/hook";
import { addItemToCart } from "../../store/CartTotalSlice";

import { useCookies } from "react-cookie";

//image
import category from "../../hooks/categoryName";
import categoryById from "../../hooks/categoryById";
import folderTitle from "../../hooks/folderTitle";

import productImage1 from "./../../assets/img/product-thumb-1.jpg";
import productImage2 from "./../../assets/img/product-thumb-2.jpg";
import productImage3 from "./../../assets/img/product-thumb-3.jpg";
import OtherBrands from "./otherBrands";
import Recent from "../Recents/Recent";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [product, setProduct] = useState([] as any);
  const [price, setPrice] = useState<ProductsType["price"]>(0);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState<ProductsType[]>([]);

  const [cookies, setCookies] = useCookies(["products"]);

  //REDUX
  const cartItem = useAppSelector((state) => state.cartItem);

  const dispatch = useAppDispatch();

  const incrementHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(
      addItemToCart({
        product,
      })
    );
  };

  useEffect(() => {
    getData();
    getCategories();
    setProductCookies(product);
  }, [product.id]);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setImage(data.imageName);
    setName(data.name);
    setPrice(data.price);
    setDescription(data.description);
    setDiscountRate(data.discountRate);
    setLoading(false);
  };

  const getCategories = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/categories`);
    const data = await response.json();
    setBrand(data);
    setLoading(false);
  };

  const setProductCookies = async (product: CookiesType) => {
    const previousProducts = cookies["products"];
    //gestion des doublons
    const exist = (await previousProducts)
      ? previousProducts.find((x: CookiesType) => x.id === product.id)
      : "";
    if (!exist) {
      const newProducts = previousProducts
        ? [
            ...previousProducts,
            {
              id: product.id,
              name: product.name,
              image: product.imageName,
              imageName: product.imageName,
              price: product.price,
              discountRate: product.discountRate,
              review: product.review,
            },
          ]
        : [
            {
              id: product.id,
              name: product.name,
              image: product.imageName,
              imageName: product.imageName,
              price: product.price,
              discountRate: product.discountRate,
              review: product.review,
            },
          ];
      setCookies("products", newProducts, { path: "/" });
    }
  };

  const myCookies = Object.values(cookies);

  let discountAmount: number = (price * discountRate) / 100;
  const imageLink = folderTitle(name) + image;
  const categoryName: string = category(name)!;

  return (
    <div>
      {loading ? (
        <p>Data is loading</p>
      ) : (
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-sidebar">
                  {myCookies && (
                    <h2 className="sidebar-title">Recently Viewed</h2>
                  )}
                  {myCookies &&
                    myCookies.map((cookies) =>
                      cookies
                        .filter((value: any) => Object.keys(value).length !== 0)
                        .splice(-3)
                        .map((cookie: any, items: any) => (
                          <Recent cookie={cookie} key={items} />
                        ))
                    )}
                </div>

                <div className="single-sidebar">
                  <h2 className="sidebar-title">Others brands</h2>
                  <ul>
                    {brand
                      .filter((x) => x.name !== categoryName)
                      .splice(0, 3)
                      .map((brand, i) => (
                        <OtherBrands
                          key={i}
                          brand={brand}
                          categoryName={categoryName}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-8">
                <div className="product-content-right">
                  <div className="product-breadcroumb">
                    <Link to={`/`} className="text-capitalize">
                      Home
                    </Link>

                    <Link
                      to={`/products/${categoryById(name)}`}
                      className="text-capitalize"
                    >
                      {category(name)}
                    </Link>
                    <Link to={`/product/${id}`} className="text-capitalize">
                      {name}
                    </Link>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="product-images">
                        <div className="product-main-img">
                          <img src={`/images/${imageLink}`} alt="" />
                        </div>

                        <div className="product-gallery">
                          <img src={productImage1} alt="" />
                          <img src={productImage2} alt="" />
                          <img src={productImage3} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="product-inner">
                        <h2 className="product-name text-capitalize">{name}</h2>
                        <div className="product-inner-price">
                          <ins>{price.toFixed(2)}€</ins>{" "}
                          <del>{discountAmount.toFixed(2)}€</del>
                        </div>
                        <form>
                          <div className="quantity">
                            <input
                              type="number"
                              // size="4"
                              className="input-text qty text"
                              title="Qty"
                              defaultValue="1"
                              name="quantity"
                              min="1"
                              step="1"
                            />
                          </div>
                          <button
                            className="add_to_cart_button"
                            onClick={(e) => incrementHandler(e)}
                          >
                            Add to cart
                          </button>
                        </form>

                        <div className="product-inner-category">
                          <h2>Product Description</h2>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
