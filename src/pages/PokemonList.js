import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import api from "../lib/api";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemons = async () => {
    const response = await api.get("/pokemon");
    const items = response.data.results.map((item) => ({
      ...item,
      ownedTotal: 0,
    }));
    setPokemon(items);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemon);
  return (
    <div>
      <Header />
      <div className="container">
        {pokemon.map((data) => {
          return <CardList data={data} />;
        })}
      </div>
    </div>
  );
};

export default PokemonList;
