import React from "react";
import styled from "styled-components";

export default function Target({ position, onClick1, onClick2 }) {

  const handleClick = (e) => {
    onClick1(e);
    onClick2(e);
  }

  return <Wrapper position={position} role="figure" onClick={handleClick}></Wrapper>;
}

const Wrapper = styled.div`
  display: initial;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  left: ${props => props.position.x + window.scrollX - 25}px;
  top: ${props => props.position.y + window.scrollY - 25}px;
`;
