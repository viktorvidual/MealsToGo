import React, { useState, createContext } from "react";

import { logOut, loginRequest, signUpRequest } from "./authentication.service";

import { onAuthStateChange } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");

  onAuthStateChange((usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsLoading(false);
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);

    try {
      const usr = await loginRequest(email, password);
      setUser(usr);
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, confirmPassword) => {
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const usr = await signUpRequest(email, password);
      setUser(usr);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const onLogOut = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
