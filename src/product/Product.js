import React, { useContext, useState } from "react";
import products from "../assets/products.json";
import {
  StyledName,
  StyledPath,
  StyledContainer,
  StyledProductDetails,
  StyledProductImage,
  StyledProductDetail,
  StyledProductName,
  StyledHR,
  StyledAdder,
  StyledButton
} from "./Product.styles";
import AddButton from "./AddButton";
import { CartContext } from "../Context";

const Product = props => {
  const [counter, setCounter] = useState(1);
  const id = props.match.params.id;
  const product = products.find(product => product.title === id);
  const { actions, dispatch } = useContext(CartContext);
  return (
    <React.Fragment>
      <b>
        <StyledPath> HOME / PLATES / </StyledPath>
        <StyledName>{product.title.toUpperCase()}</StyledName>
      </b>
      <StyledContainer>
        <StyledProductImage
          bground={process.env.PUBLIC_URL + "/media/" + product.image}
        />
        <StyledProductDetails>
          <StyledProductDetail fsize="1">{product.brand}</StyledProductDetail>
          <StyledProductName>{product.title}</StyledProductName>
          <StyledProductDetail fsize="1.5">
            ${parseFloat(product.price).toFixed(2)}
          </StyledProductDetail>
          <StyledProductDetail fsize="1">
            {product.description}
          </StyledProductDetail>
          <StyledHR />
          <StyledAdder>
            <AddButton counter={counter} saveCounter={setCounter} />
            <StyledButton
              bcolor="#4A4A4D"
              onClick={() => dispatch(actions.add(product, counter))}
            >
              ADD TO CART
            </StyledButton>
          </StyledAdder>
        </StyledProductDetails>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Product;
