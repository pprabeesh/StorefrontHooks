import React, { useContext } from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledCartContainer,
  StyledSummaryContent,
  StyledSummaryFooter,
  StyledSummaryRow,
  StyledSummary,
  StyledHome,
  StyledButton,
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
  const totalAmount = parseFloat(total).toFixed(2);
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
              <div>$ {totalAmount}</div>
            </StyledSummaryRow>
            <StyledSummaryRow>
              <div>TOTAL</div>
              <div>$ {totalAmount} CAD</div>
            </StyledSummaryRow>
          </StyledSummaryContent>
        </StyledSummary>
        <StyledSummaryFooter>
          <StyledHome>CONTINUE SHOPPING</StyledHome>
          <StyledButton bcolor="#1d1d20">
            CHECK OUT (${totalAmount})
          </StyledButton>
        </StyledSummaryFooter>
      </StyledCartContainer>
    </StyledContainer>
  );
};

export default CartList;
