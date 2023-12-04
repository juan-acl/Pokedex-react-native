import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonById } from "../helpers/api";

const PokemonDetail = (props) => {
  console.log("Detalles", JSON.stringify(props, null, 2));
  const { pokemon, navigation } = props.route.params;
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const detailPokemon = async () => {
    try {
      const result = await getPokemonById(pokemon.id);
      setPokemonDetail(result);
    } catch (error) {
      console.log("Hubo un error detailPokemon", error);
    } finally {
    }
  };

  useEffect(() => {
    try {
      detailPokemon();
    } catch (error) {
      navigation.goBack();
    }
  }, []);

  if (!pokemonDetail) return null;
  return (
    <View>
      <Text>PokemonDetail</Text>
      <Text>{pokemonDetail.name}</Text>
    </View>
  );
};

export default PokemonDetail;
