import React, { useContext, useEffect, useState } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

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

const CameraIcon = (props) => (
  <List.Icon {...props} color="black" icon="camera" />
);

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Text>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Camera"
          description="Upload a profile photo"
          left={CameraIcon}
          onPress={() => navigation.navigate("CameraScreen")}
        />

        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogOut} />
      </List.Section>
    </SafeArea>
  );
};
