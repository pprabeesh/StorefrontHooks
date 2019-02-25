import React from "react";
import {
  StyledAdder,
  Styledbutton,
  StyledFlex,
  StyledColFlex
} from "./AddButton.styles";

const AddButton = ({ counter, saveCounter }) => {
  return (
    <StyledFlex>
      <StyledAdder>{counter}</StyledAdder>
      <StyledColFlex>
        <Styledbutton onClick={() => saveCounter(counter + 1)}>+</Styledbutton>
        <Styledbutton onClick={() => (counter ? saveCounter(counter - 1) : 0)}>
          -
        </Styledbutton>
      </StyledColFlex>
    </StyledFlex>
  );
};

export default AddButton;
