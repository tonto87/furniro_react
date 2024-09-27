import React from "react";
import { Visitstyle } from "./styles/visitstyle";

const Visit = () => {
  
  return (
    <Visitstyle>
      <section class="visit">
        <div class="visit-box">
          <div class="visit__box-content">
            <h1 class="visit__box-content-h5">Shop</h1>
          </div>
          <div class="visit__box-links">
            <h3 class="visit__box-links-tohome">
              <a href="/">Home</a>
            </h3>
            <i class="visit__box-links-icon"></i>
            <h3 class="visit__box-links-toshop"><a href="/shop">Shop</a></h3>
          </div>
        </div>
      </section>
    </Visitstyle>
  );
};

export default Visit;
