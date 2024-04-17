import React from "react";

import { Container, Point, Title } from "./styles";

interface FieldProps {
  name: string;
  level: number;
  onChange: (level: number) => void;
}

export const Field: React.FC<FieldProps> = ({ name, level, onChange }) => {
  const filled = Array.from({ length: 5 }, (_, index) => {
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
