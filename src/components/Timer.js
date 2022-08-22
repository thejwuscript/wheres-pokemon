import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Timer({ gameOver }) {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const time = new Date();

    if (!startTime) setStartTime(time);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 10);

    if (gameOver) {
      clearInterval(interval);
      setCurrentTime(time);
    }

    return () => clearInterval(interval);
  }, [gameOver, startTime]);

  useEffect(() => {
    if (startTime)
      fetch("http://localhost:3001/api/v1/timers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          start_time: startTime,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
  }, [startTime]);

  let centiseconds;
  let seconds;
  let minutes;

  if (!startTime || currentTime - startTime < 0) {
    seconds = "00";
    minutes = "00";
  } else {
    const diff = currentTime - startTime;
    centiseconds = `${Math.floor((diff % 1000) / 10)}`.padStart(2, "0");
    seconds = `${Math.floor((diff / 1000) % 60)}`.padStart(2, "0");
    minutes = `${Math.floor((diff / 1000 / 60) % 60)}`.padStart(2, "0");
  }

  return (
    <Wrapper>
      <span className="timer">
        <span>{minutes}</span>:<span>{seconds}</span>:
        <span>{centiseconds}</span>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 280px;
  height: 72px;
  top: 0;
  left: calc(100vw / 2 - 100px);
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
    display: inline-block;
    text-align: center;
  }
`;
