import React from "react";

import { Container, Title } from "./styles";
import { TabsChildrenProps } from "@components/tabs";

export const SheetHeader: React.FC<TabsChildrenProps> = ({
  name,
  onChange,
  value
}) => {
  console.log(name, value);

  return (
    <Container>
      <Title>{name}</Title>
      <Title>{value}</Title>
    </Container>
  );
};
