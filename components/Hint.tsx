import { setLightness } from "polished";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const closeAnimation = keyframes`
0% {
  transform: scale(1);
}
10% {
  transform: scale(1.1);
}
100% {
  transform: scale(0);
}
`;
const HintContainer = styled.div<{ close: boolean }>`
  position: relative;
  width: 100%;
  max-width: 15rem;
  height: max-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  text-align: left;
  border-radius: 5px;
  font-weight: 600;
  animation: ${(props) =>
    props.close
      ? css`
          ${closeAnimation} 1s ease-in-out forwards;
        `
      : ""};
`;
const IconsContainer = styled.div`
  position: absolute;
  top: 0.2rem;
  left: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0;
`;
const HintIcon = styled.span`
font-size: 0.5rem;
color: ${(props) => props.theme.primary}
padding: 0;
margin: 0;
`;
const MessageContainer = styled.div`
  margin: 0 1rem;
  font-size: 0.7rem;
`;
const Text = styled.p`
  color: ${(props) => props.theme.dark};
`;
const Button = styled.button`
  width: 2.5rem;
  height: 1rem;
  background: ${(props) => props.theme.primary};
  border: none;
  border-radius: 3px;
  margin-top: 0.5rem;
  padding: 3px;
  font-size: 0.5rem;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "PT Serif", serif;
  transition: background 0.5s ease-in-out;
  -webkit-transition: background 0.5s ease-in-out;
  -o-transition: background 0.5s ease-in-out;
  -moz-transition: background 0.5s ease-in-out;

  &:hover {
    background: ${(props) => setLightness(0.7, props.theme.primary)};
  }
`;

const Hint = () => {
  const [closed, setClosed] = useState(false);
  return (
    <HintContainer close={closed}>
      <IconsContainer>
        <HintIcon>
          <i className="fa">&#xf05a;</i>
        </HintIcon>
      </IconsContainer>
      <MessageContainer>
        <Text>Drag a task into one of Today&apos;s time blocks</Text>
        <Button onClick={() => setClosed(true)}>got it</Button>
      </MessageContainer>
    </HintContainer>
  );
};

export default Hint;
