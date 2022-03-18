import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../store/hook";
import { addItemToCart } from "../../store/CartTotalSlice";

import Cookies from "js-cookie";
import ProductsType from "../../model/productType";

import productImage1 from "./../../assets/img/product-thumb-1.jpg";
import productImage2 from "./../../assets/img/product-thumb-2.jpg";
import productImage3 from "./../../assets/img/product-thumb-3.jpg";
import OtherBrands from "./otherBrands";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState<ProductsType["price"]>(0);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState<ProductsType[]>([]);

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

  const [cookiesItems, setCookiesItems] = useState<ProductsType[]>([]);

  Cookies.set("product", JSON.stringify(product), {
    expire: 0,
    path: "",
  });

  useEffect(() => {
    getData();
    getCategories();
  }, [image, name, price, description, discountRate, productId]);

  const getData = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setProductId(data.id);
    setImage(data.imageName);
    setName(data.name);
    setPrice(data.price);
    setDescription(data.description);
    setDiscountRate(data.discountRate);
  };

  const getCategories = async () => {
    const response = await fetch(`http://localhost:3000/categories`);
    const data = await response.json();
    setBrand(data);
  };

  //Calcul prix remisé
  let discountAmount: number = (price * discountRate) / 100;

  //Methode recherche image
  const folderTitle = (name: string) => {
    if (name.includes("apple")) {
      return "products-img/Apple/";
    } else if (name.includes("huawei")) {
      return "products-img/Huawei/";
    } else if (name.includes("lg")) {
      return "products-img/LG/";
    } else if (name.includes("samsung")) {
      return "products-img/Samsung/";
    } else if (name.includes("sony")) {
      return "products-img/Sony/";
    }
  };

  const imageLink = folderTitle(name) + image;

  //Méthode category Name
  const category = (name: string) => {
    if (name.includes("apple")) {
      return "Apple";
    } else if (name.includes("huawei")) {
      return "Huawei";
    } else if (name.includes("lg")) {
      return "LG";
    } else if (name.includes("samsung")) {
      return "Samsung";
    } else if (name.includes("sony")) {
      return "/Sony";
    }
  };

  //Methode category Id link
  const categoryById = (name: string) => {
    if (name.includes("apple")) {
      return "10";
    } else if (name.includes("huawei")) {
      return "40";
    } else if (name.includes("lg")) {
      return "30";
    } else if (name.includes("samsung")) {
      return "20";
    } else if (name.includes("sony")) {
      return "50";
    }
  };
  const categoryName: string = category(name)!;

  return (
    <div>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <h2 className="sidebar-title">Recently Viewed</h2>
                <div className="thubmnail-recent">
                  <img
                    src="img/product-thumb-1.jpg"
                    className="recent-thumb"
                    alt=""
                  />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>700.00 € </ins> <del>100.00 €</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img
                    src="img/product-thumb-1.jpg"
                    className="recent-thumb"
                    alt=""
                  />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img
                    src="img/product-thumb-1.jpg"
                    className="recent-thumb"
                    alt=""
                  />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img
                    src="img/product-thumb-1.jpg"
                    className="recent-thumb"
                    alt=""
                  />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
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
                        <ins>${price}</ins> <del>${discountAmount}</del>
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
    </div>
  );
};

export default ProductDetails;
