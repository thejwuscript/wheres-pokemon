import React, { useState } from "react";
import Target from "./components/Target";
import Image from "./components/Image";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveTarget = (e) => {
    e.stopPropagation();
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    }, 150);
  };

  const moveDropdownMenu = (e) => {};

  return (
    <div>
      <Image onClick1={moveTarget} onClick2={moveDropdownMenu} />
      {visible && (
        <Target
          position={position}
          onClick1={moveTarget}
          onClick2={moveDropdownMenu}
        />
      )}
      <DropdownMenu visible={visible} position={position} />
    </div>
  );
}

export default App;
