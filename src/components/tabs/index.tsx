import React, { useState } from "react";

import { TabsContainer, Title } from "./styles";
import { Controller, UseFormReturn } from "react-hook-form";
import { Field } from "@components/field";
import { TouchableOpacity } from "react-native";

interface Characteristic {
  id: string;
  level: number;
  inserted_at: string;
  updated_at: string;
  characteristic_name: string;
  category_name: string;
}
interface DataObject {
  [category: string]: Characteristic[];
}

interface TabsProps {
  data: DataObject;
  combinedData: Characteristic[];
  control: UseFormReturn["control"];
}
export const Tabs: React.FC<TabsProps> = ({ data, combinedData, control }) => {
  const [select, setSelect] = useState(0);
  const handler = (index: number): void => {
    console.log(index, Object.keys(data)[index]);
    setSelect(index);
    // if (onTabSelected) onTabSelected(tabs[index]);
  };

  return (
    <>
      <TabsContainer>
        {Object.keys(data).map((item, index) => (
          <TouchableOpacity key={item} onPress={() => handler(index)}>
            <Title>{item}</Title>
          </TouchableOpacity>
        ))}
      </TabsContainer>
      {combinedData.map((item) => {
        return item.category_name === Object.keys(data)[select] ? (
          <Controller
            key={`${item.category_name}[${item.id}]`}
            control={control}
            name={`${item.category_name}[${item.id}]`}
            render={({ field: { onChange, value, onBlur } }) => (
              <Field
                name={item.characteristic_name}
                level={value}
                onChange={onChange}
              />
            )}
          />
        ) : null;
      })}
    </>
  );
};
