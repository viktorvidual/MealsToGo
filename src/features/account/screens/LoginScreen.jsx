import React, { useState, useContext } from "react";

import {
  AuthInput,
  AuthButton,
  AccountBackground,
  AccountContainer,
} from "../components/AccountStyling/AccountStyling";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountCover } from "../components/AccountStyling/AccountStyling";

import { Spacer } from "../../../components/Spacer/Spacer";
import { Text } from "../../../components/Typography/Typography";
import { LoadingIndicator } from "../../../components/LoadingIndicator/LoadingIndicator";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <AccountBackground>
          <AccountCover />
          <AccountContainer>
            <AuthInput
              label="Email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>

            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
              Cancel
            </AuthButton>

            {error && (
              <Spacer>
                <Text variant="error">{error.message}</Text>
              </Spacer>
            )}
          </AccountContainer>
        </AccountBackground>
      )}
    </>
  );
};
