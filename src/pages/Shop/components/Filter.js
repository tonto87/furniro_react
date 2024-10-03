import React, { useState, useEffect } from "react";
import { FilterStyle } from "./styles";

const Filter = ({ perPageChange,pageState }) => {
  const [perPage, setPerPage] = useState(pageState);

  const handlePerPageChanger = (e) => {
    setPerPage(e.target.value);
  };

  useEffect(() => {
    perPageChange(perPage);
  }, [perPage]);

  return (
    <FilterStyle>
      <section className="filter">
        <div className="filter__buttons">
          <div className="filter__buttons-filtering">
            <a className="filter__buttons-filtering-a" href=""></a>
            <h1 className="filter__buttons-filtering-h1">Filter</h1>
          </div>
          <div className="filter__buttons-listing">
            <a className="filter__buttons-listing-grid" href=""></a>
            <a className="filter__buttons-listing-viewlist" href=""></a>
          </div>
          <span className="filter__result-text">
            Showing 1–16 of 32 results
          </span>
        </div>
        <div className="filter__inputs">
          <span className="filter__inputs-show">Show</span>
          <input
            type="number"
            value={perPage}
            onChange={handlePerPageChanger}
            className="filter__inputs-show-count"
          />
          <span className="filter__inputs-short">Short by</span>
          <select className="filter__inputs-select">
            <option>Default</option>
            <option>Bedroom</option>
            <option>Kitchen</option>
            <option>Diningroom</option>
          </select>
        </div>
      </section>
    </FilterStyle>
  );
};

export default Filter;
