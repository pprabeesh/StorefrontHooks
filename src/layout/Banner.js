import React from "react";
import { StyledContainer, StyledBackground, StyledText } from "./Banner.styles";

const Banner = () => (
  <StyledContainer>
    <StyledBackground bcolor="white" width="50">
      <StyledBackground bcolor="#393935" width="99">
        <StyledText>
          <h1>Plates</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur orci velit. Cras non nisi nec mi maximus maximus. Morbi
            pharetra sem nisl, eu iaculis elit blandit vel.
          </p>
        </StyledText>
      </StyledBackground>
    </StyledBackground>
  </StyledContainer>
);
export default Banner;
