import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const FuniroStyle = styled.section`
font-family: ${variables.fonts.montserrat};
  display: flex;
  flex-direction: column;
  padding: 65px 0 50px;
  overflow: hidden;
  justify-content: space-between;

  .funiro {
    &-title {
      position: absolute;
    }

    &-p {
      color: ${variables.grey2};
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 150%;
    }

    &-h1 {
      color: ${variables.grey1};
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      line-height: 100%;
    }

    &__images {
      display: flex;
      gap: 16px;
      align-items: center;

      &-left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 16px;
        flex-grow: 1;

        &-top {
          display: flex;
          gap: 16px;
          align-items: baseline;

          &-image1 {
            width: 274px;
            height: 382px;
          }

          &-image3 {
            width: 400px;
            height: 312px;
          }
        }

        &-bot {
          display: flex;
          gap: 16px;
          align-items: flex-start;

          &-image2 {
            width: 270px;
            height: 323px;
          }

          &-image4 {
            width: 344px;
            height: 242px;
          }
        }
      }

      &-center {
        display: flex;
        position: relative;
        width: 100%;

        &-image5 {
          margin: 0 auto;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-top {
          display: flex;
          gap: 16px;
          align-items: baseline;

          &-image7 {
            width: 290px;
            height: 348px;
          }

          &-image9 {
            width: 425px;
            height: 433px;
          }
        }

        &-bot {
          display: flex;
          gap: 16px;
          align-items: flex-start;

          &-image6 {
            width: 178px;
            height: 242px;
          }

          &-image8 {
            width: 500px;
          }
        }
      }
    }
  }
`;
