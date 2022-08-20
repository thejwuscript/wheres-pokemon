import React, { useState } from "react";
import Target from "./components/Target";
import Image from "./components/Image";
import DropdownMenu from "./components/DropdownMenu";
import styled from "styled-components";

function App() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({});
  const [hasClicked, setHasClicked] = useState(false);

  const handleItemClick = (e) => {
    e.preventDefault();
    removeTargetAndMenu();
    fetch("http://localhost:3001/api/v1/markers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientX: position.x,
        clientY: position.y,
        scrollX: position.scrollX,
        scrollY: position.scrollY,
        name: e.target.value,
      }),
    });
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
      setPosition({ x: e.clientX, y: e.clientY, scrollX: window.scrollX, scrollY: window.scrollY });
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
      <DropdownMenu visible={visible} position={position} onItemClick={handleItemClick} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: min-content;
  padding: 100px;
`;
export default App;
