import styled from "styled-components";
import { variables } from "../../../styles/variables";


export const Ourshopstyle = styled.div`
.shop {
    padding: 56px 102px 69px;
  
    @media screen and (width >= 1024px) {
      gap: 27px;
    }
  
    &__nextButton {
      display: flex;
      justify-content: center;
      color: ${variables.primary};
      gap: 38px;
      margin-top: 70px;
  
      .active,
      &-a:hover {
        background-color: ${variables.primary};
        color: ${variables.white};
      }
  
      &-btn {
        border: none;
        padding: 15px 30px;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        border-radius: 10px;
        background: ${variables.cream};
  
        a {
          color: ${variables.black};
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
      gap: 30px;
      flex-wrap: wrap;
    }
  }
  
  
   
`;
