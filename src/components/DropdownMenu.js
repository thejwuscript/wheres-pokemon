import React from "react";
import styled from "styled-components";

export default function DropdownMenu({ visible = false, position, onItemClick }) {
  const handleClick = (e) => e.stopPropagation();

  return (
    <Menu
      position={position}
      visible={visible}
      role="menu"
      onClick={handleClick}
    >
      <Item onClick={onItemClick} type="submit" name="name" value="Slowking">
        Slowking
      </Item>
      <hr />
      <Item   onClick={onItemClick} type="submit" name="name" value="Wobbuffet">
        Wobbuffet
      </Item>
      <hr />
      <Item onClick={onItemClick} type="submit" name="name" value="Pichu">
        Pichu
      </Item>
    </Menu>
  );
}

const Menu = styled.div`
  width: 100px;
  height: ${(props) => (props.visible ? 115 : 0)}px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  list-style: none;
  flex-direction: column;
  align-items: stretch;
  padding: 8px;
  left: ${(props) => props.position.x + 22}px;
  top: ${(props) => props.position.y + 22}px;
  position: absolute;
  z-index: 2;
  background-color: white;
  transition: ${(props) => (props.visible ? "height 0.4s ease" : "unset")};
  overflow: hidden;
  border-radius: 4px;
`;

const Item = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;