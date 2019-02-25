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
import history from "../history";

const Cart = () => {
  const { state } = useContext(CartContext);

  const count =
    state &&
    state.cartItems &&
    state.cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <Fragment>
      <StyledDiv onClick={() => history.push("/cart")}>
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
