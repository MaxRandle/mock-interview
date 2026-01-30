const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";
// example "https://pokeapi.co/api/v2/pokemon/ditto"

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
  return (
    <div>
      <form>
        <label>
          Pokemon: <input className="border" type="text" name="pokemon" />
        </label>
        <div>
          <button className="border bg-blue-200 px-6 mt-6">Go</button>
        </div>
      </form>
    </div>
  );
};
