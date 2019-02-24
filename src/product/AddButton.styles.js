import styled from "styled-components";
import { Flex } from "grid-styled";

export const StyledAdder = styled.div`
  width: 60px;
  height: 40px;
  background-color: #e6e6e6;
  margin-left: 25%;
  padding-top: 2%;
  font-size: 1.5em;
  color: #848484;
`;

export const Styledbutton = styled.div`
  height: 20px;
  width: 23px;
  margin-left: 0.8%;
  margin-bottom: 0.8%;
  width: 6%;
  padding-top: 4px;
  background-color: #848484;
  color: white;
  cursor: pointer;
`;

export const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const StyledColFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
