import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import useAuth from '../hooks';
import { useFocusEffect } from '@react-navigation/native'
import { getFavorites } from "../helpers/Favorite";
import { getPokemonById } from "../helpers/api";
import PokemonList from "../components/PokemonList";
import Logout from "../components/Logout";

const Favorites = (props) => {
  console.log('Validando las props', JSON.stringify(props, null, 2))
  const { username } = useAuth()
  const [pokemons, setPokemons] = useState([]);
  const fav = true
  let invalid = false

  useFocusEffect(
    useCallback(() => {
      loadPokemons()
    }, [])
  )


  const loadPokemons = async () => {
    try{
      const response = await getFavorites()

      console.log('Response del id', response)
      const pokemonFav = []
      if(response !== undefined) {
        for(const fav of response) {
          const pokemonFavorite = await getPokemonById(fav)
          pokemonFav.push({
            id: pokemonFavorite.id,
            name: pokemonFavorite.name,
            type: pokemonFavorite.types[0].type.name,
            order: pokemonFavorite.order,
            image: pokemonFavorite.sprites.other['official-artwork'].front_default
          })
        }
        setPokemons([...pokemons, ...pokemonFav])
      }else{
        invalid = true
      }
    }catch(error) {
      console.log('Error en los pokemones favoritos', error)
    }
  }

  // useEffect(() => {
  //   loadPokemons()
  // }, []);


  if (username !== '') {
    return (
      <SafeAreaView>
        <PokemonList
          pokemons={pokemons}
          isFav={fav}
        />
      </SafeAreaView>
    )
  }else{
    return (
      <Logout
      
      />
    );
  }

};

export default Favorites;
