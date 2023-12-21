import React from "react";
import { View } from "react-native";
import { CompactRestaurantInfo } from "./CompactRestaurantInfo";

export const MapCalloutComponent = ({ restaurant }) => {
  return (
    <>
      <View>
        <CompactRestaurantInfo isMap restaurant={restaurant} />
      </View>
    </>
  );
};
