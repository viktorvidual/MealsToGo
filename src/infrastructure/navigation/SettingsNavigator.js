import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <>
      <SettingsStack.Navigator
        screenOptions={{
          headerMode: "screen",
          CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <SettingsStack.Screen
          options={{
            header: () => null,
          }}
          name="Account"
          component={SettingsScreen}
        />
        <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      </SettingsStack.Navigator>
    </>
  );
};
