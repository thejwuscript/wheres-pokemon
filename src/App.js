import React, { useState } from "react";
import Target from "./components/Target";
import Image from "./components/Image";
import DropdownMenu from "./components/DropdownMenu";
import styled from "styled-components";

function App() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasClicked, setHasClicked] = useState(false);

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
      setPosition({ x: e.clientX, y: e.clientY });
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
      <DropdownMenu visible={visible} position={position} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: min-content;
  padding: 100px;
`;
export default App;
