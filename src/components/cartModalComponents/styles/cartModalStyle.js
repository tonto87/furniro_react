import styled from "styled-components";
import { variables } from "../../../../src/styles/variables";

export const CartModalStyle = styled.div`  
  .cartModal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${variables.black};
  background-color: rgb(0 0 0 / 40%);

  &__body {
    background-color: ${variables.lightwhite};
    margin-left: auto;
    padding: 20px 0 0;
    border: 1px solid ${variables.lightgrey};
    width: 417px;
    height: 650px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;

    &-head {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 0 0 0 30px;

      &-group {
        display: flex;
        position: relative;

        &-heading {
          color: ${variables.black};
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        &-box {
          margin-left: auto;
          padding: 1px 38px 0 0;

          &-button {
            margin-left: auto;
            width: 22px;
            height: 24px;
            display: flex;
            position: relative;
            top: 4px;
            right: 24px;
            background: none;
            background-image: url("../src/assets/icons/cartclose.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border: none;
            cursor: pointer;
          }
        }
      }

      &-line {
        height: 1px;
        width: 287px;
        background: ${variables.smoke};
      }
    }

    &-products {
      display: flex;
      padding: 42px 0 0 30px;
      flex-direction: column;
      gap: 20px;

      &-product {
        display: flex;
        padding: 0 0 0 2px;

        &-image {
          width: 105px;
          height: 105px;
          border-radius: 10px;
          background: ${variables.smoke};
        }

        &-text {
          display: flex;
          flex-direction: column;
          padding: 24px 0 0 32px;

          &-heading {
            color: ${variables.black};
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          &-pricetag {
            display: flex;
            gap: 15px;
            padding: 11px 0 0;
            align-items: center;

            &-count {
              color: ${variables.black};
              font-size: 16px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
            }

            &-x {
              color: ${variables.black};
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
            }

            &-price {
              color: ${variables.primary};
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
        }

        &-box {
          display: flex;
          align-items: center;
          padding: 0 60px 0 40px;

          &-button {
            margin-left: auto;
            width: 20px;
            height: 20px;
            background: none;
            background-image: url("../src/assets/icons/cartdelete.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border: none;
            cursor: pointer;
          }
        }
      }
    }

    &-footer {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      padding: 0 0 28px;

      &-subtotal {
        display: flex;
        padding: 0 0 26px 30px;

        &-heading {
          color: ${variables.black};
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

        &-price {
          color: ${variables.primary};
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding: 0 0 0 101px;
        }
      }

      &-line {
        width: 417px;
        height: 1px;
        background: $smoke;
      }

      &-buttons {
        padding: 32px 0 0 30px;
        display: flex;
        gap: 14px;

        &-cart {
          border-radius: 50px;
          border: 1px solid $black;
          display: flex;
          padding: 6px 30px;
          align-items: flex-start;
          gap: 10px;
        }

        &-checkout {
          border-radius: 50px;
          border: 1px solid $black;
          display: flex;
          padding: 6px 30px;
          align-items: flex-start;
          gap: 10px;
        }

        &-comparsion {
          border-radius: 50px;
          border: 1px solid $black;
          display: flex;
          padding: 6px 30px;
          align-items: flex-start;
          gap: 10px;
        }
      }
    }
  }
}

  
`;
