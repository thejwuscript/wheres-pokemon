import React from "react";
import styled from "styled-components";

export default function DropdownMenu({ visible = false }) {
  const handleClick = (e) => e.stopPropagation();

  return <Menu visible={visible} role="menu" onClick={handleClick}></Menu>;
}

const Menu = styled.div`
  width: 100px;
  height: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  list-style: none;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  gap: 8px;
  padding: 8px;
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: absolute;
  z-index: 2;
  background-color: white;
  transition: height 0.4s ease;
  overflow: hidden;
  border-radius: 4px;
`;
