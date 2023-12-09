import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";
import PokemonDetail from "../screens/PokemonDetail";

const StackNav = createStackNavigator();

const FavoriteStackNavigation = () => {
  return (
    // ? Recordando que como es stack y vamos hacia atras nos va a tomar el de la ultima pila
    <StackNav.Navigator>
      <StackNav.Screen
        name="ScreenFavorite"
        component={FavoritesScreen}
        options={{
          title: "Pokefavoritos",
        }}
      />
      <StackNav.Screen
        name='PokemonDetail'
        component={PokemonDetail}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
    </StackNav.Navigator>
  );
};

export default FavoriteStackNavigation;
