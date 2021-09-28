import React from "react";
import styled from "styled-components";
const StyledCheckbox = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background: transparent;
  height: 1rem;
  width: 1rem;
  border: 0.5px solid red;
  border-radius: 3px;
  :hover {
    filter: brightness(90%);
  }

  :disabled {
    background: red;
    opacity: 0.6;
    pointer-events: none;
  }

  :after {
    content: "";
    position: relative;
    left: 40%;
    top: 20%;
    width: 15%;
    height: 40%;
    border: solid red;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
    display: none;
  }

  :checked:after {
    display: block;
  }

  :disabled:after {
    border-color: #7b7b7b;
  }
`;
type CheckboxProps = {
  palette?: "light" | "dark";
};
const Checkbox = (props: CheckboxProps) => {
  return <StyledCheckbox></StyledCheckbox>;
};

export default Checkbox;
