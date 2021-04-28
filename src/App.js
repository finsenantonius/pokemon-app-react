import { Route } from "react-router-dom";

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemon from "./components/MyPokemon";

function App() {
  return (
    <div>
      <Route exact path="/">
        <PokemonList />
      </Route>
      <Route path="/detail">
        <PokemonDetail />
      </Route>
      <Route path="/my-pokemon">
        <MyPokemon />
      </Route>
    </div>
  );
}

export default App;
