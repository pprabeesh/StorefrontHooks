import React, { useContext } from "react";
import {
  StyledTd,
  StyledTr,
  StyledImage,
  StyledFlex,
  StyledBrand,
  StyledProduct,
  StyledProductName,
  StyledCross
} from "./CartRow.styles";
import { Box } from "grid-styled";
import AddButton from "../product/AddButton";
import { CartContext } from "../Context";

const CartRow = props => {
  const { actions, dispatch } = useContext(CartContext);
  const addItem = counter =>
    dispatch(actions.add(props.product, counter, true));
  const removeItem = title => dispatch(actions.remove(title));

  return (
    <StyledTr>
      <StyledTd>
        <StyledProduct>
          <Box>
            <StyledImage
              bground={process.env.PUBLIC_URL + "/media/" + props.product.image}
            />
          </Box>
          <Box>
            <StyledFlex>
              <StyledBrand fsize="0.8em">{props.product.brand}</StyledBrand>
              <StyledProductName>{props.product.title}</StyledProductName>
            </StyledFlex>
          </Box>
        </StyledProduct>
      </StyledTd>
      <StyledTd>
        <AddButton counter={props.product.count} saveCounter={addItem} />
      </StyledTd>
      <StyledTd>
        <StyledBrand fsize="1.2em">
          $
          {props.product.price &&
            parseFloat(props.product.count * props.product.price).toFixed(2)}
        </StyledBrand>
      </StyledTd>
      <StyledTd>
        <StyledCross onClick={() => removeItem(props.product.title)}>
          X
        </StyledCross>
      </StyledTd>
    </StyledTr>
  );
};

export default CartRow;
