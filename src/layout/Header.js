import React, { Fragment } from "react";
import Cart from "../cart/Cart";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => (
  <Fragment>
    <Logo />
    <Menu />
    <Cart />
  </Fragment>
);

export default Header;
