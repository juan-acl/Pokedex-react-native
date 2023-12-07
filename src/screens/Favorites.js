import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import useAuth from '../hooks';


const Favorites = (props) => {
  const { username } = useAuth()

  const [pokemons, setPokemons] = useState([]);

  if (!username) {
    return (
      <SafeAreaView>
        <Text>Vista de favoritos</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <Text>Fav</Text>
    </SafeAreaView>
  );
};

export default Favorites;
