import React, { useState, useEffect } from "react";
// import { SafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Sirve para que el contenido no se meta en la barra de notificaciones en android
import { getPokemons, DetailPokemons } from "../helpers/api";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const getPokemonsApi = async () => {
    try {
      const response = await getPokemons(nextUrl);
      setNextUrl(response.next);
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
      <PokemonList
        pokemons={pokemons}
        getPokemonsApi={getPokemonsApi}
        nextUrl={nextUrl}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
