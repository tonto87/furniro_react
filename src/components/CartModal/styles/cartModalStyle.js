import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const CartModalStyle = styled.div`
  font-family: ${variables.fonts.montserrat};
  position: fixed;
  display: flex;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: end;

  .cartModal__body {
    background-color: ${variables.lightwhite};    
    padding: 15px;
    border: 1px solid ${variables.lightgrey};
    width: 100%;
    max-width: 450px;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .cartModal__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      font-size: 24px;
    }

    .cartModal__close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: ${variables.primary};
      transition: color 0.3s;

      &:hover {
        color: ${variables.secondary};
      }
    }
  }

  .cartModal__products {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    flex-grow: 1;

    .cartModal__product {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cartModal__product-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 10px;
        background: ${variables.smoke};
      }

      .cartModal__product-name {
        margin: 0 10px;
        font-weight: bold;
      }

      .cartModal__remove-button {
        background: none;
        border: none;
        cursor: pointer;
        color: ${variables.danger};
        transition: color 0.3s;

        &:hover {
          color: darkred;
        }
      }

      div {
        display: flex;
        align-items: center;

        button {
          background: ${variables.lightgrey};
          border: none;
          cursor: pointer;
          padding: 5px 10px;
          margin: 0 5px;
          border-radius: 4px;
          transition: background 0.3s;

          &:hover {
            background: ${variables.secondary};
          }

          &:disabled {
            background: ${variables.smoke};
            cursor: not-allowed;
          }
        }
      }
    }
  }

  .cartModal__footer {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid ${variables.smoke};
    gap: 10px;

    &-subtotal {
      display: flex;    

      &-price {
        color: ${variables.primary};
        font-size: 20px;        
        font-weight: 600;
        line-height: normal;        
      }
    } 
    &-line {
      width: 417px;
      height: 1px;
      background: ${variables.smoke};
    }   
    &-buttons {
      justify-content: center;
      display: flex;
      gap: 14px;
      &-cart {
        border-radius: 50px;
        border: 1px solid $black;
        display: flex;
        padding: 6px 30px;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        &:hover {
          color: ${variables.primary};
        }
      }
      &-checkout {
        border-radius: 50px;
        border: 1px solid $black;
        display: flex;
        padding: 6px 30px;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        &:hover {;
          color: ${variables.primary};
        }
      }
      &-comparsion {
        border-radius: 50px;
        border: 1px solid $black;
        display: flex;
        padding: 6px 30px;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        &:hover {
          color: ${variables.primary};
        }
      }
    }
  }

  @media (max-width: 600px) {
    .cartModal__body {
      width: 95%;
    }
  }
`;
