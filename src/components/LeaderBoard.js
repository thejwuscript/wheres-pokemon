import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function LeaderBoard() {
  const [rankings, setRankings] = useState([]);

  const fetchRankings = async () => {
    const response = await fetch("http://localhost:3001/api/v1/rankings", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  useEffect(() => {
    fetchRankings().then((data) => {
      setRankings(data);
    });
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Leaderboard</h1>
      <List>
        <Item>
          <span style={{fontSize: '20px', fontWeight: 'bold' }}>Name</span>
          <span style={{fontSize: '20px', fontWeight: 'bold' }}>Duration</span>
        </Item>
        {rankings.map((ranking) => (
          <Item key={ranking.id}>
            <span>{ranking.name}</span>
            <span>{ranking.duration}</span>
          </Item>
        ))}
      </List>
    </div>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 30px 180px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
