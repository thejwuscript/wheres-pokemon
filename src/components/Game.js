import React, { useState, useEffect } from "react";
import Target from "./Target";
import Image from "./Image";
import DropdownMenu from "./DropdownMenu";
import styled from "styled-components";
import Timer from "./Timer";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Game() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({});
  const [hasClicked, setHasClicked] = useState(false);
  const [foundPositions, setFoundPositions] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [duration, setDuration] = useState(null);
  const [timerId, setTimerId] = useState(null);
  let navigate = useNavigate();
  
  useEffect(() => {
    if (foundPositions.length === 3) {
      console.log("You win!");
      setGameOver(true);
    }
  }, [foundPositions]);

  const handleItemClick = async (e) => {
    e.preventDefault();
    removeTargetAndMenu();

    const response = await fetch("https://sleepy-wave-10213.herokuapp.com/api/v1/markers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageX: position.x,
        pageY: position.y,
        name: e.target.value,
      }),
    });
    const data = await response.json();
    console.log(data.message);
    if (data.position) {
      setFoundPositions([...foundPositions, data.position]);
    }
  };

  const moveTargetAndMenu = (e) => {
    if (hasClicked) {
      setVisible(false);
      setHasClicked(false);
      return;
    }

    e.stopPropagation();
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
      setPosition({ x: e.pageX, y: e.pageY });
    }, 0);
    setHasClicked(true);
  };

  const removeTargetAndMenu = () => {
    setVisible(false);
    setHasClicked(false);
  };

  

  const handleModalSubmit = (name) => {
    fetch('https://sleepy-wave-10213.herokuapp.com/api/v1/rankings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          duration: duration,
          timer_id: timerId,
        })
    }).then(res => {
      if (res.ok) navigate('/leaderboard')
    })
  }

  return (
    <Wrapper onClick={removeTargetAndMenu}>
      <Timer gameOver={gameOver} recordDuration={setDuration} timerId={timerId} setTimerId={setTimerId} />
      {gameOver && <StyledButton onClick={() => setShowModal(true)}>Next &#9755;</StyledButton>}
      {showModal && <Modal duration={duration} onSubmit={handleModalSubmit} closeModal={() => setShowModal(false)}/>}
      <Image onClick={moveTargetAndMenu} />
      {visible && <Target position={position} onClick={moveTargetAndMenu} />}
      <DropdownMenu
        visible={visible}
        position={position}
        onItemClick={handleItemClick}
      />
      {foundPositions.length > 0 &&
        foundPositions.map((position, index) => {
          return <Target key={index} position={position} color="#66FF99" />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: min-content;
  padding: 100px;
`;

const StyledButton = styled.button`
  position: fixed;
  top: 7px;
  right: 20px;
  font-size: 2.5rem;
  text-decoration: none;
  color: white;
  background-color: green;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

export default Game;
