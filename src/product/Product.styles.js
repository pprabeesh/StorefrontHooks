import styled, { css } from "styled-components";
import { Box, Flex } from "grid-styled";

export const StyledName = styled.span`
  color: #4a4a4d;
  font-family: serif;
  font-size: 0.8em;
`;

export const StyledPath = styled.span`
  font-family: serif;
  font-size: 0.8em;
`;

export const StyledContainer = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const StyledProductDetails = styled.div`
  width: 40%;
  height: 60%;
  margin-top: 5%;
  display: inline-block;
`;

export const StyledProductImage = styled.div`
  width: 50%;
  height: 60%;
  margin-top: 5%;
  margin-left: 5%;
  display: inline-block;
  background-image: ${props => `url(${props.bground})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledProductDetail = styled(Box)`
  font-size: ${props => `${props.fsize}em`};
  color: #848484;
  font-family: serif;
  padding: 2%;
`;

export const StyledProductName = styled(Box)`
  font-size: 3em;
  font-family: serif;
  color: #1d1d20;
  margin: 2%;
`;

export const StyledHR = styled.hr`
  color: #1d1d20;
  margin: 2% 4%;
`;

export const StyledAdder = styled(Flex)`
  height: 100%;
  width: 100%;
  padding-left: 25%;
`;

export const StyledButton = styled.div`
  text-align: center;
  min-width: 100px;
  max-width: 100px;
  min-height: 32px;
  max-height: 32px;
  color: white;
  padding-top: 5%;
  margin-right: 20%
  font-size: 0.7em;
  cursor: pointer;
  ${props =>
    props.bcolor &&
    css`
      background-color: ${props.bcolor};
    `};
`;
