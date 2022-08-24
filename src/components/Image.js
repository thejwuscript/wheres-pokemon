import React from "react";
import PokemonImage from "../images/pokemon.webp";

export default function Image({ onClick, imageLoaded, src }) {
  return <img src={src} alt="pokemon" onClick={onClick} onLoad={() => console.log("pokemon loads")} />;
}
