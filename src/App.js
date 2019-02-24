import React, { useReducer } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StyledApp } from "./App.styles";
import Category from "./category/Category";
import CartList from "./cart/CartList";
import Product from "./product/Product";
import Layout from "./layout/Layout";
import { CartContext } from "./Context";
import { reducer } from "./Reducer";
import { actions } from "./Actions";
import history from "./history";

const App = () => {
  const initialState = { cartItems: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, actions, dispatch }}>
      <StyledApp>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Category} />
              <Route path="/cart" component={CartList} />
              <Route path="/product/:id" component={Product} />
            </Switch>
          </Layout>
        </Router>
      </StyledApp>
    </CartContext.Provider>
  );
};

export default App;
