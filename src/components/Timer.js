import React from "react";
import styled from "styled-components";

export default function Timer() {
  return (
    <Wrapper>
      <span className="timer">02:43</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 160px;
  height: 72px;
  top: 0;
  left: calc(100vw / 2);
  z-index: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  & span {
    font-family: 'Orbitron', sans-serif;
    font-size: 42px;
    font-weight: bold;
  }
`;
