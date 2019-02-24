import styled, { css } from "styled-components";

export const StyledHoverBg = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 100%;
  display: none;
`;

export const StyledContainer = styled.div`
  height: 35%;
  width: 25%;
  padding: 1%;
  &:hover ${StyledHoverBg} {
    display: inline-block;
  }
`;

export const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  background: ${props => `url(${props.bground})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledText = styled.div`
  font-size: 0.75em;
  text-align: center;
  padding: 5%;
  color: #525963;
`;

export const StyledProductName = styled.div`
  text-align: center;
  font-size: 0.75em;
  font-weight: bold;
`;

export const StyledButton = styled.div`
  position: relative;
  top: 5%;
  left: 5%;
  text-align: center;
  width: 60%;
  height: 15%;
  color: white;
  margin-left: 15%;
  margin-top: 10%;
  padding-top: 5%;
  font-size: 0.7em;
  cursor: pointer;
  ${props =>
    props.bcolor &&
    css`
      background-color: ${props.bcolor};
    `};
`;
