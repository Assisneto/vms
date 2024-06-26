import { TouchableOpacityProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface CustomButtonProps extends TouchableOpacityProps {
  transparent?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: space-around;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Body = styled.View`
  padding: 0 40px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 25px;
`;

export const InputContainer = styled.View`
  padding: 10px 0;
  justify-content: space-around;
`;

export const CustomButton = styled.TouchableOpacity<CustomButtonProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  ${(props) =>
    props.transparent === true
      ? ""
      : `background-color: ${props.theme.colors.quaternary}`};
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.tertiary
}))`
  width: 100%;
  height: 60px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
  padding-left: 10px;
  margin: 10px 0;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 17px;
`;
export const SubTitleColored = styled.Text`
  color: ${(props) => props.theme.colors.quinary};
  font-size: 20px;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.quinary};
  font-size: 14px;
`;
