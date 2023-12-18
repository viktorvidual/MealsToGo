import * as React from "react";
import { Text } from "../../../components/Typography/Typography";
import { SafeArea } from "../../../components/utility/SafeArea/SafeArea";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export const MapScreen = () => {
  return (
    <SafeArea>
      <MapView style={styles.map} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
