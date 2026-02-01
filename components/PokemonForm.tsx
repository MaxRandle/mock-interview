/*
 INSTRUCTIONS

  Build upon the scaffolding in this component to accomplish the following:
  - Read the pokemon name from the form
  - Fetch pokemon details from the pokeapi pokemon endpoint
  - Render the pokemon details how you like below the form

  RULES
  - You may use google as much as you like
  - You may copy-paste code from the internet
  - You may not use AI coding assistants
  - You may not use AI assistant chat interfaces
  - You may use code snippets from the google AI search results
  - You may not paste any part of your code into the internet
  - You may paste error messages or debugging info into the internet

  ASSESSMENT
  - There are many approaches to solving this, use whichever you think is best
  - Do not worry about css/styling, the assessment is focused on your usage of react
  - You have 1 hour

*/

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";
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
