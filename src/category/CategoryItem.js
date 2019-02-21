import React from "react";
import { StyledContainer, StyledBackground } from "./CategoryItem.styles";

const CategoryItem = product => {
  return (
    <StyledContainer>
      <StyledBackground
        bground={process.env.PUBLIC_URL + "/media/" + product.image}
      />
      here
    </StyledContainer>
  );
};

export default CategoryItem;
