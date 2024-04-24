import React, { useState } from "react";

import { TabsContainer, TabsHeaderContainer, Title } from "./styles";
import { Controller, UseFormReturn } from "react-hook-form";

import { TouchableOpacity } from "react-native";
import {
  CharacteristicItem,
  createDynamicKey,
  KeyValueItem
} from "@utils/createFormKey";

interface Characteristic {
  id: string;
  level: number;
  inserted_at: string;
  updated_at: string;
  characteristic_name: string;
  category_name: string;
}

interface TabsChildrenProps {
  name: string;
  value: number;
  onChange: (level: number) => void;
}
type CombinedItem = CharacteristicItem | KeyValueItem;
interface TabsProps<T extends CharacteristicItem | KeyValueItem> {
  data: { [category: string]: T[] };
  combinedData: T[]; // Change from CombinedItem[] to T[]
  control: UseFormReturn["control"];
  Component: React.FunctionComponent<TabsChildrenProps>;
  headKeyField: keyof T;
  tailKeyField: keyof T;
  nameChildrenField: keyof T;
}
const Tabs = <T extends CharacteristicItem | KeyValueItem>({
  data,
  combinedData,
  control,
  Component,
  headKeyField,
  tailKeyField,
  nameChildrenField
}: TabsProps<T>) => {
  const [select, setSelect] = useState(0);
  const handler = (index: number): void => {
    console.log(index, Object.keys(data)[index]);
    setSelect(index);
    // if (onTabSelected) onTabSelected(tabs[index]);
  };

  return (
    <TabsContainer>
      <TabsHeaderContainer>
        {Object.keys(data).map((item, index) => (
          <TouchableOpacity key={item} onPress={() => handler(index)}>
            <Title>{item}</Title>
          </TouchableOpacity>
        ))}
      </TabsHeaderContainer>
      {combinedData.map((item) => {
        return item.category_name === Object.keys(data)[select] ? (
          <Controller
            key={createDynamicKey(item, headKeyField, tailKeyField)}
            control={control}
            name={createDynamicKey(item, headKeyField, tailKeyField)}
            render={({ field: { onChange, value, onBlur } }) => (
              <Component
                name={item[nameChildrenField]}
                value={value}
                onChange={onChange}
              />
            )}
          />
        ) : null;
      })}
    </TabsContainer>
  );
};

export { Tabs, TabsChildrenProps };
