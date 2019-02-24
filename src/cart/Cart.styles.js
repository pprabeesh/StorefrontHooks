import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { StyledPopup } from "./CartPopup.styles";

export const StyledDiv = styled.div`
  &:hover ${StyledPopup} {
    display: block;
  }
`;

export const StyledFlex = styled(Flex)`
  cursor: pointer;
`;

export const StyledBox = styled(Box)`
  font-weight: bold;
  padding: 2em 1em 2em 2em;
  min-width: 150px;
`;

export const StyledArrowBox = styled(Box)`
  padding-top: 2.25em;
`;
