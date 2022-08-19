import React, { useState } from "react";
import Target from './components/Target';
import Image from './components/Image';
import DropdownMenu from './components/DropdownMenu';

function App() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveTarget = (e) => {
    e.stopPropagation();
    setVisible(false);
    setTimeout(() => {
      setPosition({ x: e.clientX, y: e.clientY});
      setVisible(true);
    }, 0);
  }

  const moveDropdownMenu = (e) => {}

  return (
    <div>
     <Image onClick1={moveTarget} onClick2={moveDropdownMenu} />
     {visible && <Target position={position} onClick1={moveTarget} onClick2={moveDropdownMenu} />}
     {visible && <DropdownMenu visible={visible} />}
    </div>
  );
}

export default App;
