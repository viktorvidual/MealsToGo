import React, { useState, useContext } from "react";

import {
  AuthInput,
  AuthButton,
  AccountBackground,
  AccountContainer,
} from "../components/AccountStyling/AccountStyling";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountCover } from "../components/AccountStyling/AccountStyling";

import { LoadingIndicator } from "../../../components/LoadingIndicator/LoadingIndicator";
import { Spacer } from "../../../components/Spacer/Spacer";
import { Text } from "../../../components/Typography/Typography";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

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

            <AuthInput
              label="ConfirmPassword"
              value={confirmPassword}
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setconfirmPassword(text)}
            />

            <AuthButton
              icon="mail"
              mode="contained"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Sign Up
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
