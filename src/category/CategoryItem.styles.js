import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100%;
`;

export const StyledBackground = styled.div`
  height: 30%;
  width: 20%
  position: relative;
  text-align: center;
  background: ${props => `url(${props.bground})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ;
`;
