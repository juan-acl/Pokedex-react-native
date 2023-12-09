import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../screens/Account";

const StackNav = createStackNavigator();

const AccountStackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ScreenAccount"
        component={AccountScreen}
        options={{ title: "Mi pokecuenta" }}
      />
    </StackNav.Navigator>
  );
};

export default AccountStackNavigation;
