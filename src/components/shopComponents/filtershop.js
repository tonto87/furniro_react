import React from "react";
import { Filtershopstyle } from "./styles/filtershopstyle";


const Filtershop = () => {
  
  return (
    <Filtershopstyle>
    <section class="filter">
        <div class="filter__buttons">
          <div class="filter__buttons-filtering">
            <a class="filter__buttons-filtering-a" href=""></a>
            <h1 class="filter__buttons-filtering-h1">Filter</h1>
          </div>
          <div class="filter__buttons-listing">
            <a class="filter__buttons-listing-grid" href=""></a>
            <a class="filter__buttons-listing-viewlist" href=""></a>
          </div>
          <span class="filter__result-text">Showing 1–16 of 32 results</span>
        </div>
        <div class="filter__inputs">
          <span class="filter__inputs-show">Show</span>
          <input type="number" value="16" class="filter__inputs-show-count" />
          <span class="filter__inputs-short">Short by</span>
          <select class="filter__inputs-select">
            <option>Default</option>
            <option>Bedroom</option>
            <option>Kitchen</option>
            <option>Diningroom</option>
          </select>
        </div>
      </section>
    </Filtershopstyle>
  );
};

export default Filtershop;
