import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Text } from "../Typography/Typography";
import { CompactRestaurantInfo } from "../../features/map/components/CompactRestaurantInfo";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const RestaurantInfoWrapper = styled.View`
  margin-right: 10px;
`;

export const FavouritesBar = ({ favourties, goToDetails }) => {
  return (
    <>
      <FavouritesWrapper>
        <Text>Favourites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourties.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <RestaurantInfoWrapper key={key}>
                <TouchableOpacity
                  onPress={() =>
                    goToDetails("RestaurantDetails", {
                      restaurant: restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </RestaurantInfoWrapper>
            );
          })}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};
