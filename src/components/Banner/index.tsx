import React from "react";
import Button from "../Button";

import { BannerStyled, Header, ButtonContainer } from "./styles";

export interface BannerProps {
  Image: string;
}

const Banner: React.FC<BannerProps> = ({ Image }) => {
  return (
    <>
      <BannerStyled Image={Image}>
        <Header>Discover</Header>
        <ButtonContainer>
          <Button text="Come in" type="outline" />
          <Button text="Let's go" />
        </ButtonContainer>
      </BannerStyled>
      ;
    </>
  );
};

export default Banner;
