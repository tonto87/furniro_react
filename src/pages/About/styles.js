import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  color: red;

  ${({ $hide }) =>
    $hide &&
    css`
      display: none;
    `}
`;
