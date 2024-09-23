import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const OurProductsStyle = styled.div`
  .product {
    padding: 56px 102px 69px;

    &__nextButton {
      display: flex;
      justify-content: center;
      color: ${variables.aqua};
    }

    &__button {
      display: flex;
      justify-content: center;
      color: ${variables.primary};
      margin: 32px;

      &-btn {
        height: 48px;
        background-color: ${variables.white};
        border: 1px solid ${variables.primary};

        a {
          color: ${variables.primary};
          padding: 12px 82px;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 24px */
          text-decoration: none;
        }
      }
    }

    &__title {
      color: ${variables.grey1};
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 48px */
    }

    &__cards {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }
  }
`;
