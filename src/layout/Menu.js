import React from "react";
import { Box } from "grid-styled";
import { StyledFlex, StyledMenuItem } from "./Menu.styles";
import { StyledArrow, StyledHeaderText } from "../assets/common.styles";

const Menu = () => (
  <StyledFlex>
    <Box>
      <StyledHeaderText>HOME</StyledHeaderText>
    </Box>
    <StyledMenuItem>
      <Box>SHOP</Box>
      <Box mt={1} ml={2}>
        <StyledArrow />
      </Box>
    </StyledMenuItem>
    <Box>
      <StyledHeaderText>JOURNAL</StyledHeaderText>
    </Box>
    <StyledMenuItem>
      <Box>MORE</Box>
      <Box mt={1} ml={2}>
        <StyledArrow />
      </Box>
    </StyledMenuItem>
  </StyledFlex>
);

export default Menu;
