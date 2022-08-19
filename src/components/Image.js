import React from "react";
import PokemonImage from '../images/pokemon.webp';

export default function Image( {onClick1, onClick2} ) {

  const handleClick = (e) => {
    onClick1(e);
    onClick2();
  };

  return (
    <img src={PokemonImage} alt="pokemon" onClick={handleClick} />
  )
};
