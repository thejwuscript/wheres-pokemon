import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Start({ready}) {
  return (
    <Wrapper>
      {ready && <StyledLink to="/game">Start!</StyledLink>}
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  font-size: 2rem;
  width: 300px;
  height: 300px;
  font-weight: bold;
  border-radius: 50%;
  border: 3px solid black;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
