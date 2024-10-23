import React, { useState } from "react";
<<<<<<< HEAD
import { ModalStyle } from "./styles";
=======
import { PriceModal, PriceModalBackdrop, PriceModalButton, PriceModalContainer, PriceModalFooter } from "./styles";
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4

const PriceFilterModal = ({ isOpen, onClose, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleApply = () => {
<<<<<<< HEAD
    onPriceChange(minPrice, maxPrice); // применяем фильтр
    onClose(); // закрываем модальное окно
  };

  if (!isOpen) return null; // если окно закрыто, не отображаем его

  return (
    <ModalStyle>
      <div className="modal">
=======
    onPriceChange(minPrice, maxPrice);
    onClose();
  };
  const handleContainerClick = (e) => {
    console.log("propagation");
    e.stopPropagation();
  };
  // const handleBackdropClick = () => {
  //   console.log("backdrop");
  //   onClose();
  // };

  if (!isOpen) return null;

  return (

    <PriceModal onClick={handleContainerClick}>
      <PriceModalBackdrop onClick={onClose}>
      </PriceModalBackdrop>
      <PriceModalContainer >
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
        <h2>Filter by Price</h2>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
<<<<<<< HEAD
            onChange={(e) => setMinPrice(e.target.value)}
=======
            onChange={(e) => setMinPrice(Number(e.target.value))}
>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
<<<<<<< HEAD
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <button onClick={handleApply}>Apply</button>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalStyle>
=======
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <PriceModalFooter>
          <PriceModalButton onClick={handleApply}>Apply</PriceModalButton>
          <PriceModalButton onClick={onClose}>Close</PriceModalButton>
        </PriceModalFooter>
      </PriceModalContainer>
    </PriceModal>

>>>>>>> 4f1685358d2f9e44a6a9ba877249138e202458d4
  );
};

export default PriceFilterModal;
