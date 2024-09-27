import styled from "styled-components";
import { variables } from "../../../styles/variables";
import shopcover from "../../../assets/images/shopcover.png";
import shoparrow from "../../../assets/icons/shoparrow.svg";

export const Visitstyle = styled.div`
.visit {
    display: flex;
    flex-direction: column;
    height: 316px;
    text-align: center;
    justify-content: center;
    background-image: url(${shopcover});
    background-size: cover;
  
    &__box {
      width: 124px;
      height: 72px;
      padding-top: 121px;
  
      &-content {
        &-h5 {
          color: ${variables.black};
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
  
      &-links {
        display: flex;
        justify-content: center;
  
        &-icon {
          width: 20px;
          height: 20px;
          background: url(${shoparrow});
          margin: 2px 0 0 5px;
        }
  
        &-tohome {
          a {
            text-decoration: none;
            color: ${variables.black};
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            list-style: none;
          }
        }
  
        &-toshop {
          a {
            text-decoration: none;
            color: ${variables.primary};
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }
      }
    }
  }
  
   
`;
