import React, { Fragment } from "react";
import Category from "../category/Category";
import Header from "./Header";
import Banner from "./Banner";

const Layout = () => (
  <Fragment>
    <Header />
    <Banner />
    <Category />
  </Fragment>
);

export default Layout;
