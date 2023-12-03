import { View, Text, FlatList } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flatList}
    />
  );
};

const style = StyleSheet.create({
  flatList: {
    paddingHorizontal: 5,
  },
});

export default PokemonList;
