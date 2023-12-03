import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { getPokemons } from "../helpers/api";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsApi = async () => {
    try {
      const response = await getPokemons();
      console.log("Datos de la api", response);
      setPokemons(response);
    } catch (error) {
      console.log("Error en la peticion", error);
    }
  };

  useEffect(() => {
    getPokemonsApi();
  }, []);

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export default Pokedex;
