import React from "react";
import styled from "styled-components";

export default function DropdownMenu({ visible = false, position }) {
  const handleClick = (e) => e.stopPropagation();

  return (
    <Menu
      position={position}
      visible={visible}
      role="menu"
      onClick={handleClick}
    >
      <li>Pokemon 1</li>
      <hr />
      <li>Pokemon 2</li>
      <hr />
      <li>Pokemon 3</li>
    </Menu>
  );
}

const Menu = styled.ul`
  width: 100px;
  height: ${(props) => (props.visible ? 115 : 0)}px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  list-style: none;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  gap: 8px;
  padding: 8px;
  left: ${(props) => props.position.x + window.scrollX + 22}px;
  top: ${(props) => props.position.y + window.scrollY + 22}px;
  position: absolute;
  z-index: 2;
  background-color: white;
  transition: ${(props) => (props.visible ? "height 0.4s ease" : "unset")};
  overflow: hidden;
  border-radius: 4px;
`;
