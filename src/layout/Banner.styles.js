import styled, { css } from "styled-components";
import BannerImage from "../assets/plates-header.jpg";

export const StyledContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${BannerImage});
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const StyledBackground = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  color: white;
  ${props =>
    props.bcolor &&
    props.width &&
    css`
      background-color: ${props.bcolor};
      width: ${props.width}%;
    `}
`;

export const StyledText = styled.div`
  padding-top: 12%;
`;
