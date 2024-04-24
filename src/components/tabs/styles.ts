import styled from "styled-components/native";

export const TabsHeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
export const TabsContainer = styled.View`
  justify-content: flex-start;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
`;
