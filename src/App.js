import React from "react";
import { Route } from "react-router-dom";
import { StyledApp } from "./App.styles";
import Category from "./category/Category";
import CartList from "./cart/CartList";
import Product from "./product/Product";
import Layout from "./layout/Layout";

const App = () => (
  <StyledApp>
    <Layout>
      <Route exact path="/" component={Category} />
      <Route path="/cart" component={CartList} />
      <Route path="/product/:id" component={Product} />
    </Layout>
  </StyledApp>
);

export default App;
