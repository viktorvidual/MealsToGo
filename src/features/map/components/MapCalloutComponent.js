import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/Typography/Typography";
import { View, Image } from "react-native";
import { CompactRestaurantInfo } from "./CompactRestaurantInfo";

export const MapCalloutComponent = ({ restaurant }) => {
  return (
    <>
      <View>
        <CompactRestaurantInfo restaurant={restaurant} />
      </View>
    </>
  );
};
