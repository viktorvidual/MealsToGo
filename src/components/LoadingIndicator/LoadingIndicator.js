import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

const LoadingContainer = styled.View`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingIndicator = () => {
  return (
    <>
      <LoadingContainer>
        <Loader animating={true} color={MD2Colors.blue300} size="large" />
      </LoadingContainer>
    </>
  );
};
