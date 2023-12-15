import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea/SafeArea";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <>
    <SearchContainer>
      <Searchbar placeholder="search" />
    </SearchContainer>

    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </>
);
