import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SearchComponent } from "../components/SearchComponent";

import { RestaurantContext } from "../../../services/restaurant/restaurants.context";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <LoadingIndicator
            animating={true}
            color={MD2Colors.blue300}
            size="large"
          />
        </LoadingContainer>
      )}
      <SearchComponent />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
