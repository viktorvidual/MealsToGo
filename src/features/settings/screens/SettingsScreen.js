import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/SafeArea/SafeArea";
import { Text } from "../../../components/Typography/Typography";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const FavouritesIcon = (props) => (
  <List.Icon {...props} color="black" icon="heart" />
);

const LogoutIcon = (props) => (
  <List.Icon {...props} color="black" icon="door" />
);

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Text>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogOut} />
      </List.Section>
    </SafeArea>
  );
};
