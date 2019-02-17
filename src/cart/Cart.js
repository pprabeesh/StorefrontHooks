import React from "react";
import { StyledArrow } from "../assets/common.styles";
import { StyledFlex, StyledArrowBox, StyledBox } from "./Cart.styles";

const Cart = () => (
  <StyledFlex>
    <StyledBox>MY CART (0) </StyledBox>
    <StyledArrowBox>
      <StyledArrow />
    </StyledArrowBox>
  </StyledFlex>
);

export default Cart;
