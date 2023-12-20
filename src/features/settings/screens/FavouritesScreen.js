import React, { useContext } from "react";
import styled from "styled-components/native";

import { RestaurantList } from "../../restauraunts/screens/RestaurantScreen";
import { RestaurantInfoCard } from "../../restauraunts/components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/SafeArea/SafeArea";
import { Text } from "../../../components/Typography/Typography";

import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { TouchableOpacity } from "react-native";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      {favourites.length ? (
        <SafeArea>
          <RestaurantList
            data={favourites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </SafeArea>
      ) : (
        <NoFavouritesArea>
          <Text>You have not added anything to favourites, yet.</Text>
        </NoFavouritesArea>
      )}
    </>
  );
};
