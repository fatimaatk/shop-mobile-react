import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLock,
  faRefresh,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import "./../../css/style.css";

const PromoArea = () => {
  return (
    <div className="promo-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo1">
              <FontAwesomeIcon icon={faRefresh} />
              <p>30 Days return</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo2">
              <FontAwesomeIcon icon={faTruck} />
              <p>Free shipping</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo3">
              <FontAwesomeIcon icon={faLock} />
              <p>Secure payments</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo4">
              <FontAwesomeIcon icon={faGift} />
              <p>New products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoArea;
