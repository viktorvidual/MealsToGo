import React from "react";

import { MapScreen } from "../../features/map/screens/MapScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { RestaurantsNavigator } from "./RestaurantsNavigator";
import { SettingsNavigator } from "./SettingsNavigator";

import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";
import { LocationContextProvider } from "../../services/restaurant/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
  gestureEnabled: true,
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigation = () => {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};
