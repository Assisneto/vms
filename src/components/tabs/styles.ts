import styled from "styled-components/native";
export const TabsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
`;
