import React, { useContext } from "react";
import { Text } from "../../components/Typography/Typography";
import { SafeArea } from "../../components/utility/SafeArea/SafeArea";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="LogOut" onPress={() => onLogOut()}>
        Log Out
      </Button>
    </SafeArea>
  );
};
