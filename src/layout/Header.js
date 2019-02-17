import React from "react";
import { Flex, Box } from "grid-styled";
import Cart from "../cart/Cart";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => (
  <Flex>
    <Box width={1 / 8}>
      <Logo />
    </Box>
    <Box width={6 / 8}>
      <Menu />
    </Box>
    <Box width={1 / 8} mr={4}>
      <Cart />
    </Box>
  </Flex>
);

export default Header;
