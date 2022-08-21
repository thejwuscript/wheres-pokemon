import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Timer() {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCentiseconds(centiseconds + 1);
      if (centiseconds === 99) {
        setCentiseconds(0);
        setSeconds(seconds + 1);
      }
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [centiseconds, seconds, minutes]);

  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  const displayCentiseconds =
    centiseconds < 10 ? `0${centiseconds}` : centiseconds;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <Wrapper>
      <span className="timer">
        <span>{displayMinutes}</span>:<span>{displaySeconds}</span>:
        <span>{displayCentiseconds}</span>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 72px;
  top: 0;
  left: calc(100vw / 2 - 150px);
  z-index: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  & span {
    font-family: "Orbitron", sans-serif;
    font-size: 42px;
    font-weight: bold;
    color: black;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & span > span {
    width: 72px;
    height: 52px;
    display: inline-block;
    text-align: center;
  }
`;
