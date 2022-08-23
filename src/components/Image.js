import React from "react";
import PokemonImage from "../images/pokemon.webp";

export default function Image({ onClick, imageLoaded }) {
  return <img src={PokemonImage} alt="pokemon" onClick={onClick} onLoad={() => imageLoaded(true)} />;
}
