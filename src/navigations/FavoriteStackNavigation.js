import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";

const StackNav = createStackNavigator();

const FavoriteStackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ScreenFavorite"
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
        }}
      />
    </StackNav.Navigator>
  );
};

export default FavoriteStackNavigation;
