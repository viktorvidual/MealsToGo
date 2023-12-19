import React, { useState } from "react";
import { Text } from "../../../components/Typography/Typography";
import { TextInput } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
} from "../components/AccountStyling/AccountStyling";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AccountBackground>
        <AccountContainer>
          <Text>Login Screen</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
