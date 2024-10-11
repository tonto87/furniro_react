import React, { useState } from "react";
import { ModalStyle } from "./styles";

const PriceFilterModal = ({ isOpen, onClose, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleApply = () => {
    onPriceChange(minPrice, maxPrice); // применяем фильтр
    onClose(); // закрываем модальное окно
  };

  if (!isOpen) return null; // если окно закрыто, не отображаем его

  return (
    <ModalStyle>
      <div className="modal">
        <h2>Filter by Price</h2>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <button onClick={handleApply}>Apply</button>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalStyle>
  );
};

export default PriceFilterModal;
