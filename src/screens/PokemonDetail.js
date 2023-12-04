import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPokemonById } from "../helpers/api";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

// Navigation de las props llega si es una screen si es un componente no

const PokemonDetail = (props) => {
  console.log("Detalles", JSON.stringify(props, null, 2));
  const { pokemon } = props.route.params;
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const navigation = useNavigation();

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
    props.navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#ffff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });

    return (cleanUp = () => {});
  }, []);

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
      <Type types={pokemonDetail.types} />
      <Stats stats={pokemonDetail.stats} />
    </ScrollView>
  );
};

export default PokemonDetail;
