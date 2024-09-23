import React from "react";
import { CardStyle } from "./styles/cardstyle";
import share from "../../../src/assets/icons/gridicons_share.svg";
import compare from "../../../src/assets/icons/compare-svgrepo-com 1.svg";
import heart from "../../../src/assets/icons/heart.svg";


const Card = ({ product, addToCart }) => {
  return (
    <CardStyle>
      <div className="card">
        <img className="card__img" src={product.img} alt={product.name} />
        <div className="card__main">
          <h1 className="card__main-title">{product.name}</h1>
          <p className="card__main-name">{product.paragraph}</p>
          <div className="card__prices">
            <p className="card__price-now">${product.price}</p>
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
