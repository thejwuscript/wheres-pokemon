import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Modal({ duration, onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButtonContainer>
          <CloseButton to="/leaderboard" className="closeButton">
            X
          </CloseButton>
        </CloseButtonContainer>
        <ModalTitle className="modalTitle">Record Your Result</ModalTitle>
        <Result>You found all 3 Pokemons in {duration}!</Result>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:{" "}
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <FormFooter>
            <CancelButton to="/leaderboard">Cancel</CancelButton>
            <Button type="submit">Submit</Button>
          </FormFooter>
        </Form>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 210px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseButton = styled(Link)`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  color: black;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Form = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const CancelButton = styled(Link)`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #ccc;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    background-color: #ccc;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const Result = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
