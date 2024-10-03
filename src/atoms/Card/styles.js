import styled from "styled-components";
import { variables } from "../../styles/variables";

export const CardStyle = styled.div`
  .card {
    display: flex;

    /* width: 285px; */
    flex-direction: column;
    position: relative;
    flex-basis: calc(25% - 32px);

    &__ellipse {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      border: none;
      background-color: ${variables.redAccents};
      color: ${variables.white};

      &--new {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 48px;
        height: 48px;
        border-radius: 100%;
        border: none;
        background-color: ${variables.greenAccents};
        color: ${variables.white};
      }
    }

    &__main {
      padding: 16px 20px 30px 16px;
      background: ${variables.lightBG};

      &-title {
        color: ${variables.grey1};
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        padding-bottom: 8px;
      }

      &-name {
        color: ${variables.grey3};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
      }
    }

    &__prices {
      display: inline-flex;
      align-items: center;
      gap: 16px;
    }

    &__price-now {
      color: ${variables.grey1};
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 30px */
    }

    &__price-decrese {
      color: ${variables.grey4};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      text-decoration-line: strikethrough;
    }

    &__hovered {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: ${variables.grey1};
      top: auto;
      right: auto;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      &-btn {
        width: 202px;
        height: 48px;
        background: ${variables.white};
        color: ${variables.primary};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        cursor: pointer;
        border: none;
      }

      &-icons {
        /* Сверху | Справа | Снизу | Слева */
        padding: 34px 16px 175px;
        display: flex;
        gap: 20px;
      }

      &-shareIcon {
        display: flex;
        text-decoration: none;
        color: ${variables.white};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        gap: 2px;
      }

      &-compare {
        display: flex;
        color: ${variables.white};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        gap: 2px;
        text-decoration: none;
        img {
          width: 20px;
        }
      }

      &-like {
        display: flex;
        color: ${variables.white};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        gap: 2px;
        text-decoration: none;
      }
    }

    &:hover {
      // stylelint-disable-next-line
      .card__hovered {
        opacity: 0.72;
        transform: none;
      }
    }
  }
`;
