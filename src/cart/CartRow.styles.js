import styled from "styled-components";
import { Flex } from "grid-styled";

export const StyledTd = styled.td`
  border-top: 1px solid #f2f2f2;
`;

export const StyledTr = styled.tr`
  padding-top: 2%;
`;

export const StyledFlex = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

export const StyledProduct = styled(Flex)`
  margin: 2% 2%;
`;

export const StyledBrand = styled.div`
 color: #BDBDBD
 font-size: ${props => `${props.fsize}`}; 
 align-self: flex-start;
 padding-top: 2%;
 padding-left: 10px;
`;

export const StyledProductName = styled.div`
 color: #2E2E2E
 font-size: 0.8em; 
 align-self: flex-start;
 padding-top: 10px;
 padding-left: 10px;
`;

export const StyledImage = styled.div`
  background: ${props => `url(${props.bground})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80px;
  width: 80px;
`;

export const StyledCross = styled.div`
  font-size: 2em;
  color: #bdbdbd;
  font-weight: 200;
  cursor: pointer;
`;
