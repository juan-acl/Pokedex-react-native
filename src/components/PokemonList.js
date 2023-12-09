import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, getPokemonsApi, nextUrl, isFav } = props;
  const paginationPokemons = () => {
    if(getPokemonsApi !== undefined) getPokemonsApi();
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
      onEndReachedThreshold={0.5} //Antes de llegar al final de todo los pokemos que se cargen mas
      ListFooterComponent={
        !isFav && 
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
    // marginTop: Platform.OS === "android" ? 33 : 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
