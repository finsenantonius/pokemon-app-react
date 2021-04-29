import { Route } from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemon from "./pages/MyPokemon";

function App() {
  return (
    <div>
      <Route exact path="/">
        <PokemonList />
      </Route>
      <Route path="/detail/:id">
        <PokemonDetail />
      </Route>
      <Route path="/my-pokemon">
        <MyPokemon />
      </Route>
    </div>
  );
}

export default App;
