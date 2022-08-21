import React, { useState } from "react";
import Target from "./components/Target";
import Image from "./components/Image";
import DropdownMenu from "./components/DropdownMenu";
import styled from "styled-components";

function Game() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({});
  const [hasClicked, setHasClicked] = useState(false);
  const [foundPositions, setFoundPositions] = useState([]);

  const handleItemClick = async (e) => {
    e.preventDefault();
    removeTargetAndMenu();

    const response = await fetch("http://localhost:3001/api/v1/markers", {
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

  return (
    <Wrapper onClick={removeTargetAndMenu}>
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

export default Game;
