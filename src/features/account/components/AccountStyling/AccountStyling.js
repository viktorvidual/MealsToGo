import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";
import { Text } from "../../../../components/Typography/Typography";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  border-radius: 20px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  font-size: 40px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
