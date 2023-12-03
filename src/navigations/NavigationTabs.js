import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountScreen from "../screens/Account";
import FavoritesScreen from "../screens/Favorites";
import PokedexScreen from "../screens/Pokedex";
import icon_pokedex from "../assets/icon_pokedex.jpeg";

const TabNav = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <TabNav.Navigator initialRouteName="AccountScreen">
      <TabNav.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <TabNav.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => RenderIcon(),
        }}
      />
      <TabNav.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

function RenderIcon() {
  return (
    <Image source={icon_pokedex} style={{ width: 50, height: 50, top: 7 }} />
  );
}

export default NavigationTab;
