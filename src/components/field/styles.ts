import { TouchableOpacityProps } from "react-native";

import styled from "styled-components/native";
interface PointProps extends TouchableOpacityProps {
  filled: boolean;
}
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
`;

export const Point = styled.TouchableOpacity<PointProps>`
  background-color: ${({ filled }) => (filled ? "red" : "#ffff")};
  width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
