"use client";

import Image from "next/image";
import { SubmitEventHandler, useState } from "react";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

type Pokemon = {
  name: string;
  id: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: {
    front_default: string;
    back_default: string;
  };
};

export const PokemonForm = ({}) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  const fetchPokemonData = async (pokemonName: string) => {
    const res = await fetch(POKEMON_URL + pokemonName);
    const resJson = await res.json();
    console.log(resJson);

    setPokemonData(resJson);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (
    formSubmitEvent,
  ) => {
    formSubmitEvent.preventDefault();
    const formData = new FormData(formSubmitEvent.currentTarget);
    const pokemonName = formData.get("pokemon");
    if (pokemonName) {
      fetchPokemonData(pokemonName.toString());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon: <input className="border" type="text" name="pokemon" />
        </label>
        <div>
          <button className="border bg-blue-200 px-6 mt-6">Go</button>
        </div>
      </form>

      {pokemonData ? (
        <div className="mt-6">
          <p>Name: {pokemonData.name}</p>
          <p>Pokedex id: {pokemonData.id}</p>
          <p>
            Types: {pokemonData.types.map(({ type }) => type.name).join(" ")}
          </p>
          <p>Weight: {pokemonData.weight}</p>
          <Image
            alt={pokemonData.name + "front"}
            src={pokemonData.sprites.front_default}
            width={256}
            height={256}
          />
          <Image
            alt={pokemonData.name + "back"}
            src={pokemonData.sprites.back_default}
            width={256}
            height={256}
          />
        </div>
      ) : null}
    </div>
  );
};
