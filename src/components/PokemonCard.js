import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import _ from "lodash";
import { getColorByPokemon } from "../helpers/getColorByPokemon";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const pokemonColor = getColorByPokemon(pokemon.type);
  const bgStyle = { backgroundColor: pokemonColor, ...style.bg };

  const detailPokemon = () => {};

  return (
    <TouchableNativeFeedback onPress={detailPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyle}>
            <Text style={style.name}>{_.capitalize(pokemon.name)}</Text>
            <Text style={style.id}>#{pokemon.id}</Text>
            <Image source={{ uri: pokemon.image }} style={style.image} />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    marginLeft: 10,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bg: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    height: 90,
    width: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 20,
  },
  id: {
    color: "#fff",
  },
});

export default PokemonCard;
