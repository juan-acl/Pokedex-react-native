import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { getPokemonById } from "../helpers/api";
import Header from "../components/Pokemon/Header";

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
    <ScrollView>
      <Header
        name={pokemonDetail.name}
        image={pokemonDetail.sprites.other["official-artwork"].front_default}
        order={pokemonDetail.order}
        type={pokemonDetail.types[0].type.name}
      />
    </ScrollView>
  );
};

export default PokemonDetail;
