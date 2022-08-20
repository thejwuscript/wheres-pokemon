import React from "react";
import styled from "styled-components";

export default function Target({ position, onClick }) {
  return (
    <Wrapper position={position} role="figure" onClick={onClick}></Wrapper>
  );
}

const Wrapper = styled.div`
  display: initial;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  left: ${(props) => props.position.x - 25}px;
  top: ${(props) => props.position.y - 25}px;
`;
