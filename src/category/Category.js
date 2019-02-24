import React from "react";
import CategoryItem from "./CategoryItem";
import { StyledContainer, Styledflex } from "./Category.styles";
import products from "../assets/products.json";
import Banner from "../layout/Banner";

export const Category = () => {
  return (
    <React.Fragment>
      <Banner />
      <StyledContainer>
        <Styledflex>
          {products &&
            products.map((product, index) => (
              <CategoryItem key={index + product.brand} {...product} />
            ))}
        </Styledflex>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Category;
