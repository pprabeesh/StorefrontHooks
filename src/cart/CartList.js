import React, { useContext } from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledCartContainer,
  StyledSummaryContent,
  StyledSummaryRow,
  StyledSummary,
  StyledTable,
  StyledTh,
  Spacer
} from "./CartList.styles";
import CartRow from "./CartRow";
import { CartContext } from "../Context";

const CartList = () => {
  const { state } = useContext(CartContext);
  const total = state.cartItems.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <StyledContainer>
      <StyledHeader>Shopping Cart</StyledHeader>
      <StyledCartContainer>
        <StyledTable>
          <col width="280" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <tr>
            <StyledTh align="left">PRODUCT</StyledTh>
            <StyledTh align="left">QUANTITY</StyledTh>
            <StyledTh align="center">TOTAL</StyledTh>
            <StyledTh align="center">ACTION</StyledTh>
          </tr>
          <Spacer />
          {state.cartItems.map((item, index) => (
            <CartRow product={item} key={index + item.title} />
          ))}
        </StyledTable>
        <StyledSummary>
          <StyledSummaryContent>
            <StyledSummaryRow>CART OVERVIEW</StyledSummaryRow>
            <StyledSummaryRow>
              <div>SUBTOTAL</div>
              <div>$ {parseFloat(total).toFixed(2)}</div>
            </StyledSummaryRow>
            <StyledSummaryRow>
              <div>TOTAL</div>
              <div>$ {parseFloat(total).toFixed(2)} CAD</div>
            </StyledSummaryRow>
          </StyledSummaryContent>
        </StyledSummary>
      </StyledCartContainer>
    </StyledContainer>
  );
};

export default CartList;
