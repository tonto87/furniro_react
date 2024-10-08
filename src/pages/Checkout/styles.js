import styled from "styled-components";
import { variables } from "../../styles/variables";
import shopCover from "../../assets/images/shopcover.png";

export const CheckoutStyle = styled.div`
  .checkout-cover {
    font-family: ${variables.fonts.montserrat};
    display: flex;
    background: url(${shopCover}) no-repeat center center;
    background-size: cover;
    height: 316px;
    justify-content: center;
    align-items: center;
    color: ${variables.fontColor};

    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }

  .checkout-container {
    font-family: ${variables.fonts.montserrat};
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    gap: 50px;

    form {
      flex: 1;
      max-width: 400px;
      display: flex;
      flex-direction: column;

      label {
        margin: 0.5rem 0 0.2rem;
        font-weight: bold;
      }

      input,
      textarea {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: none;
        border-radius: 4px;
        font-family: ${variables.fonts.montserrat};
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      button {
        background-color: #007bff;
        color: ${variables.fontColor};
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        background-color: ${variables.cream2};

        &:hover {
          background-color: ${variables.cream};
        }
      }
    }

    .order-summary-container {
      display: flex;
      width: 500px;
      flex-direction: column;

      h2 {
        margin-bottom: 1rem;
      }

      .order-summary-item {
        margin-bottom: 10px;
      }
    }
  }
`;
