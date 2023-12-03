import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";

const StackNav = createStackNavigator();

const PokedexStackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="PokeScreen" component={PokedexScreen} />
    </StackNav.Navigator>
  );
};

export default PokedexStackNavigation;
