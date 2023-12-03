import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { getPokemons, DetailPokemons } from "../helpers/api";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsApi = async () => {
    try {
      const response = await getPokemons();
      const pokemonArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetail = await DetailPokemons(pokemon.url);
        pokemonArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonArray]);
      // console.log("Los pokemons", pokemons);
    } catch (error) {
      console.log("Error en la peticion", error);
    }
  };

  useEffect(() => {
    getPokemonsApi();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
