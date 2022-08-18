import React from "react";
import styled from "styled-components";

export default function Target({ visible=false, onClick1, onClick2 }) {

  const handleClick = () => {
    onClick1();
    onClick2();
  }

  return <Wrapper visible={visible} role="figure" onClick={handleClick}></Wrapper>;
}

const Wrapper = styled.div`
  display: ${props => props.visible ? "initial" : "none"};
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background: transparent;
  border-radius: 50%;
  position: absolute;
`;
