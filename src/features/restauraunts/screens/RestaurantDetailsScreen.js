import React, { useState } from "react";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/SafeArea/SafeArea";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  const [expandedBreakfast, setExpandedBreakFast] = useState(false);
  const [expandedLunch, setExpandedLunch] = useState(false);
  const [expandedDinner, setExpandedDinner] = useState(false);
  const [expandedDrinks, setExpandedDrinks] = useState(false);

  return (
    <>
      <SafeArea>
        <RestaurantInfoCard restaurant={restaurant} />

        <ScrollView>
          <List.Section title="Menu">
            <List.Accordion
              title="Breakfast"
              left={(props) => (
                <List.Icon {...props} icon="bread-slice-outline" />
              )}
              expanded={expandedBreakfast}
              onPress={() => setExpandedBreakFast(!expandedBreakfast)}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="Classic Breakfast" />
            </List.Accordion>

            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="food" />}
              expanded={expandedLunch}
              onPress={() => setExpandedLunch(!expandedLunch)}
            >
              <List.Item title="Burger and Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroum Soup" />
            </List.Accordion>

            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-turkey" />}
              expanded={expandedDinner}
              onPress={() => setExpandedDinner(!expandedDinner)}
            >
              <List.Item title="Pork Steak" />
              <List.Item title="Pasta with Mozarella" />
              <List.Item title="Pizza with Peperoni" />
            </List.Accordion>

            <List.Accordion
              title="Drinks"
              left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
              expanded={expandedDrinks}
              onPress={() => setExpandedDrinks(!expandedDrinks)}
            >
              <List.Item title="Coffe with Milk" />
              <List.Item title="Coca-Cola" />
              <List.Item title="Ice-Tea" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </SafeArea>
    </>
  );
};
