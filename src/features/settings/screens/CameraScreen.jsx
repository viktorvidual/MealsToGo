import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Alert } from "react-native";
import styled from "styled-components/native";

import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/Typography/Typography";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CaptureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 40px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();
      } catch (error) {
        Alert.alert("Error", "Failed to take picture: " + error.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />; // or some loading indicator
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
      <CaptureButton title="Take Picture" onPress={takePicture} />
    </>
  );
};
