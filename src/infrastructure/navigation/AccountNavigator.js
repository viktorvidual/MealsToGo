import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/SafeArea/SafeArea";

import { AccountScreen } from "../../features/account/screens/AccountScreen";
import { RegisterScreen } from "../../features/account/screens/RegisterScreen";
import { LoginScreen } from "../../features/account/screens/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={AccountScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
