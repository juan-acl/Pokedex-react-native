import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, getPokemonsApi, nextUrl } = props;

  const paginationPokemons = () => {
    getPokemonsApi();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flatList}
      onEndReached={nextUrl !== null ? paginationPokemons : null} // Cuando llegue al final de la lista vuelve a cargar mas pokemons
      onEndReachedThreshold={2} //Antes de llegar al final de todo los pokemos que se cargen mas
      ListFooterComponent={
        nextUrl !== null && (
          <ActivityIndicator
            size="large"
            style={style.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

const style = StyleSheet.create({
  flatList: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
