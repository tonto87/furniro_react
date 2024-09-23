import React from "react";
import { CardStyle } from "./styles/cardstyle";
import imagee1 from "../../../src/assets/images/image 1.png";
import share from "../../../src/assets/icons/gridicons_share.svg";
import compare from "../../../src/assets/icons/compare-svgrepo-com 1.svg";
import heart from "../../../src/assets/icons/heart.svg";

const Card = ({ addToCart }) => {
  return (
    <CardStyle>
      <div className="card">
        <img className="card__img" src={imagee1} alt="Product" />
        <div className="card__main">
          <h1 className="card__main-title">Syltherinee</h1>
          <p className="card__main-name">Stylish cafe chair</p>
          <div className="card__prices">
            <p className="card__price-now">Rp 2.500.000</p>
            <p className="card__price-decrese">Rp 3.500.000</p>
          </div>
        </div>
        <div className="card__hovered">
          <button className="card__hovered-btn" onClick={addToCart}>
            Add to cart
          </button>

          <div className="card__hovered-icons">
            <a className="card__hovered-shareIcon" href="#">
              <img src={share} alt="Share" />
              <h4>Share</h4>
            </a>
            <a className="card__hovered-compare" href="#">
              <img src={compare} alt="Compare" />
              <h4>Compare</h4>
            </a>
            <a className="card__hovered-like" href="#">
              <img src={heart} alt="Like" />
              <h4>Like</h4>
            </a>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
