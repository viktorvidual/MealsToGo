import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restauraunts/screens/RestaurantScreen";
import { RestaurantDetailsScreen } from "../../features/restauraunts/screens/RestaurantDetailsScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        presentation: "modal",
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants List"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
