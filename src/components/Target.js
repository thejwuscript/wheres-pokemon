import React from "react";
import styled from "styled-components";

export default function Target() {
  return <Wrapper role="figure"></Wrapper>;
}

const Wrapper = styled.div`
  display: none;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  background: transparent;
  border-radius: 50%;
  position: absolute;
`;
