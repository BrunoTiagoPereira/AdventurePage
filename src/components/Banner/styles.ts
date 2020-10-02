import styled from "styled-components";

import { BannerProps } from "./index";

export const BannerStyled = styled.div<BannerProps>`
  height: 100vh;
  background-image: url(${(p) => p.Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  color: white;
  font-size: 15rem;
  font-weight: 50;
`;

export const ButtonContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;
