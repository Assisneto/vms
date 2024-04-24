import React from "react";

import { Container, Point, Title } from "./styles";
import { TabsChildrenProps } from "@components/tabs";

export const Field: React.FC<TabsChildrenProps> = ({
  name,
  onChange,
  value: level
}) => {
  const lengthTotal = level > 5 ? level : 5;
  const filled = Array.from({ length: lengthTotal }, (_, index) => {
    return (
      <Point
        key={`${index}`}
        filled={!(level <= index)}
        onPress={() => {
          onChange(index + 1);
        }}
      />
    );
  });

  return (
    <Container>
      <Title>{name}</Title>

      {filled}
    </Container>
  );
};
