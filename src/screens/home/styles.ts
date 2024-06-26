import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
`;
