import styled from "styled-components";
import { Flex } from "grid-styled";

export const StyledAdder = styled.div`
  min-width: 60px;
  max-width: 60px;
  min-height: 52px;
  max-height: 52px;
  background-color: #e6e6e6;
  padding-top: 2%;
  font-size: 2.5em;
  color: #848484;
  text-align: center;
`;

export const Styledbutton = styled.div`
  min-height: 22px;
  max-height: 22px;
  min-width: 23px;
  max-width: 23px;
  margin-left: 2px;
  margin-bottom: 2px;
  padding-top: 4px;
  background-color: #848484;
  color: white;
  cursor: pointer;
`;

export const StyledFlex = styled(Flex)`
  width: 30%;
  height: 100%;
`;

export const StyledColFlex = styled(Flex)`
  width: 15%;
  height: 15%;
  flex-direction: column;
`;
