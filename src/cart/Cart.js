import React, { useContext, Fragment } from "react";
import { StyledArrow } from "../assets/common.styles";
import {
  StyledFlex,
  StyledArrowBox,
  StyledBox,
  StyledDiv
} from "./Cart.styles";
import { CartContext } from "../Context";
import { CartPopup } from "./CartPopup";

const Cart = () => {
  const { state } = useContext(CartContext);

  const count = state && state.cartItems && state.cartItems.length;

  return (
    <Fragment>
      <StyledDiv>
        <StyledFlex>
          <StyledBox>MY CART ({count || "0"})</StyledBox>
          <StyledArrowBox>
            <StyledArrow />
          </StyledArrowBox>
        </StyledFlex>
      </StyledDiv>
      <CartPopup />
    </Fragment>
  );
};

export default Cart;
