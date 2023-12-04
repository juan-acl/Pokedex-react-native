import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonDetailScreen from "../screens/PokemonDetail";

const StackNav = createStackNavigator();

const PokedexStackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="PokeScreen"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <StackNav.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </StackNav.Navigator>
  );
};

export default PokedexStackNavigation;
