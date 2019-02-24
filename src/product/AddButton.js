import React, { useState } from "react";
import {
  StyledAdder,
  Styledbutton,
  StyledFlex,
  StyledColFlex
} from "./AddButton.styles";

const AddButton = () => {
  const [counter, setCounter] = useState(1);

  return (
    <StyledFlex>
      <StyledAdder>{counter}</StyledAdder>
      <StyledColFlex>
        <Styledbutton onClick={() => setCounter(counter + 1)}>+</Styledbutton>
        <Styledbutton onClick={() => setCounter(counter - 1)}>-</Styledbutton>
      </StyledColFlex>
    </StyledFlex>
  );
};

export default AddButton;
