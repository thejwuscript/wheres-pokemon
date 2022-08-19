import React from "react";
import PokemonImage from "../images/pokemon.webp";

export default function Image({ onClick }) {
  return <img src={PokemonImage} alt="pokemon" onClick={onClick} />;
}
