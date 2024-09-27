import styled from "styled-components";
import { variables } from "../../../styles/variables";
import filtering from "../../../assets/icons/filtering.svg";
import gridfiltering from "../../../assets/icons/grid-filtering.svg";
import viewlistfiltering from "../../../assets/icons/view-list-filtering.svg"

export const Filtershopstyle = styled.div`
.filter {
    background: ${variables.cream};
    padding: 22px 100px;
    display: flex;
  
    &__buttons {
      border-right: 1px ${variables.fontLight};
      display: flex;
      gap: 24px;
  
      &-filtering {
        display: flex;
        gap: 12px;
        align-items: center;
  
        &-a {
          width: 27px;
          height: 26px;
          background-image: url(${filtering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
  
        
        &-h1 {
          color: $black;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
  
      &-listing {
        display: flex;
        gap: 12px;
        align-items: center;
  
        &-grid {
          width: 27px;
          height: 26px;
          background-image: url(${gridfiltering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
  
        &-viewlist {
          width: 27px;
          height: 26px;
          background-image: url(${viewlistfiltering});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-color: none;
        }
      }
    }
  
    &__result-text {
      color: $black;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      align-content: center;
    }
  
    &__inputs {
      border-right: 1px ${variables.fontLight};
      gap: 24px;
      display: flex;
      margin-left: auto;
      align-items: center;
  
      &-show {
        color: ${variables.black};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
  
        &-count {
          width: 55px;
          height: 55px;
          flex-shrink: 0;
        }
      }
  
      &-short {
        color: ${variables.black};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
  
      &-select {
        width: 188px;
        height: 55px;
        flex-shrink: 0;
        color: ${variables.fontLight};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        background-color: ${variables.white};
        appearance: none;
        padding-left: 30px;
  
        option {
          color: ${variables.fontLight};
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  
  
  input[type="number"] {
    appearance: textfield;
    color: ${variables.fontLight};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    border: none;
  }
  
   
`;
