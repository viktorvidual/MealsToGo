import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";

import { WebView } from "react-native-webview";

import { Text } from "../../../components/Typography/Typography";

const isAndroid = Platform.OS === "android";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <>
      <Item>
        <Image
          source={{
            uri: restaurant.photos[0],
          }}
        />
        <Text center variant="caption" numberOfLines={3}>
          {restaurant.name}
        </Text>
      </Item>
    </>
  );
};
