import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const InspirationsStyle = styled.div`
  .inspirations {
    font-family: ${variables.fonts.poppins};
    background: ${variables.cream};
    display: flex;

    &__body {
      display: flex;
      width: 100%;
    }

    &__title {
      color: ${variables.grey1};
      display: flex;
      padding: 223px 42px 223px 100px;
      flex-direction: column;

      // TODO: [Tonto] don't use tag names as class names, rgb use variable
      &-h1 {
        text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
      }

      &-p {
        color: $grey2;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        padding: 0 0 25px;
      }

      &-button {
        background: ${variables.primary};
        border: 0px;
        color: ${variables.white};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        width: 176px;
        height: 48px;
      }
    }

    &__slider {
      display: flex;
      padding: 44px 0;
      gap: 24px;
      position: relative;
      margin-left: auto;

      &-cart {
        display: flex;
        flex-direction: column;
        position: relative;

        &-img {
          display: block;

          &-1 {
            position: relative;
            height: 582px;
            display: flex;
          }

          &-2 {
            width: 372px;
            height: 486px;
          }
        }

        &-title {
          position: absolute;
          top: 428px;
          left: 24px;
          width: 217px;

          // TODO: [Tonto] use variable
          background: rgb(255 255 255 / 72%);
          backdrop-filter: blur(1.5px);
          gap: 8px;
          max-width: 100%;
          max-height: 100%;
          height: auto;

          // TODO: [Tonto] don't use number as class names
          &-1 {
            display: flex;
            flex-direction: row;
            padding: 32px 43px 0 32px;
            gap: 8px;

            &-img {
              stroke-width: 1px;
              stroke: $grey2;
            }
          }

          // TODO: [Tonto] don't use number as class names
          &-2 {
            display: flex;
            flex-direction: row;
            padding: 24px 8px 32px 32px;

            &-p {
              color: $grey2;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            }

            // TODO: [Tonto] don't use tag name as class names
            &-h1 {
              color: $grey1;
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 120%;
            }
          }
        }

        &-button {
          background: ${variables.primary};
          border: 0px;
          color: ${variables.white};
          position: absolute;
          top: 510px;
          left: 241px;
          width: 48px;
          height: 48px;
        }
      }

      &-button {
        position: absolute;
        top: 311px;
        right: 55px;
        width: 72px;
        height: 72px;
        background: none;
        border-radius: 5px;
        fill: $white;

        // TODO: [Tonto] use variable
        filter: drop-shadow(0 4px 14px rgb(0 0 0 / 16%));
        background-image: url("../src/assets/icons/ellipse4.svg");
        display: flex;
        justify-content: center;
        align-items: center;

        &-icon {
          top: 311px;
          right: 55px;
          width: 18px;
          height: 24px;
          background-image: url("../src/assets/icons/right24px.svg");
          background-repeat: no-repeat;
        }
      }

      &-radio {
        display: inline-flex;
        align-items: center;
        position: absolute;
        top: 570px;
        right: 328px;
        gap: 20px;

        &-buttons {
          width: 11px;
          height: 11px;
          background-image: url("../src/assets/icons/ellipse1.svg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          border: none;

          &:focus {
            width: 27px;
            height: 27px;
            background-image: url("../src/assets/icons/active.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            border: none;
          }
        }
      }
    }
  }
`;
