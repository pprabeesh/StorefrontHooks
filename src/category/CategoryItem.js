import React, { useContext } from "react";
import {
  StyledContainer,
  StyledBackground,
  StyledText,
  StyledProductName,
  StyledHoverBg,
  StyledButton
} from "./CategoryItem.styles";
import { CartContext } from "../Context";
import history from "../history";

const CategoryItem = product => {
  const { actions, dispatch } = useContext(CartContext);
  return (
    <StyledContainer>
      <StyledBackground
        bground={process.env.PUBLIC_URL + "/media/" + product.image}
      >
        <StyledHoverBg>
          <StyledButton
            bcolor="#1d1d20"
            onClick={() => history.push(`/product/${product.price}`)}
          >
            VIEW DETAILS
          </StyledButton>
          <StyledButton
            bcolor="#4A4A4D"
            onClick={() => dispatch(actions.add(product))}
          >
            ADD TO CART
          </StyledButton>
        </StyledHoverBg>
      </StyledBackground>
      <StyledText>{product.brand}</StyledText>
      <StyledProductName>
        {product.title && product.title.toUpperCase()}
      </StyledProductName>
      <StyledText>
        ${product.price && parseFloat(product.price).toFixed(2)}
      </StyledText>
    </StyledContainer>
  );
};

export default CategoryItem;
