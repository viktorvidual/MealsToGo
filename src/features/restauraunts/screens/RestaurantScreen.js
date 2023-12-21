import React, { useContext, useState } from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SearchComponent } from "../components/SearchComponent";
import { FavouritesBar } from "../../../components/favourites/FavouritesBarComponent";

import { RestaurantContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

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
      <SearchComponent
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourties={favourites}
          goToDetails={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
