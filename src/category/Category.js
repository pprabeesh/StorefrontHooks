import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { StyledContainer, Styledflex } from "./Category.styles";

export const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.PUBLIC_URL + "products.json");
      const data = await response.json();
      setProducts(data);
    })();
  });

  return (
    <StyledContainer>
      <Styledflex>
        {products.map((product, index) => (
          <CategoryItem key={index + product.brand} {...product} />
        ))}
      </Styledflex>
    </StyledContainer>
  );
};

export default Category;
