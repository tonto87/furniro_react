import styled from "styled-components";
import { variables } from "../../styles/variables";
import shopCover from "../../assets/images/shopcover.png";

export const ProductStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  display: flex;
  flex-direction: column;
  .product__details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    padding: 20px;
  }

  .product__img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .product__name {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }

  .product__paragraph {
    font-size: 16px;
    margin: 10px 0;
  }

  .product__price {
    font-size: 18px;
    color: ${variables.fontColor};
    margin: 10px 0;
    font-weight: 600;
  }

  .product__add-to-cart {
    padding: 10px 20px;
    background-color: ${variables.primary};
    color: ${variables.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${variables.grey2}; // Change this to your preferred hover color
    }
  }
`;
