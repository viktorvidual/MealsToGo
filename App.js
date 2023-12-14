import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/restauraunts/screens/RestaurantScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
