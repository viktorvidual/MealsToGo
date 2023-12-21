import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import { SearchComponent } from "../components/SearchComponent";
import { MapCalloutComponent } from "../components/MapCalloutComponent";

import { LocationContext } from "../../../services/restaurant/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const { lat, lng, viewport } = location;

  const [latDelta, setLatDelta] = useState();

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <SearchComponent />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          longitudeDelta: 0.02,
          latitudeDelta: latDelta,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant,
                  })
                }
              >
                <MapCalloutComponent restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
