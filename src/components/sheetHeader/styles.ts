import styled from "styled-components/native";
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
`;
