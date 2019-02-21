import React from "react";
import CategoryItem from "./CategoryItem";

const product = {
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "blue-stripe-stoneware-plate.jpg"
};

export const Category = () => <CategoryItem {...product} />;

export default Category;
