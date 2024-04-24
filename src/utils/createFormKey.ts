interface BaseItem {
  id: string;
  category_name: string;
  [key: string]: any;
}

export interface CharacteristicItem extends BaseItem {
  level: number;
  inserted_at: string;
  updated_at: string;
  characteristic_name: string;
}

export interface KeyValueItem extends BaseItem {
  value: string;
  key: string;
}

export const createDynamicKey = <T extends CharacteristicItem | KeyValueItem>(
  item: T,
  keyHead: keyof T,
  keyTail: keyof T
): string => `${item[keyHead]}[${item[keyTail]}]`;

export const createFormKey = <T extends CharacteristicItem | KeyValueItem>(
  data: T[],
  keyHead: keyof T,
  keyTail: keyof T,
  value: keyof T
): Record<string, any> => {
  return data.reduce((acc, item) => {
    const key = createDynamicKey(item, keyHead, keyTail);
    return {
      ...acc,
      [key]: item[value]
    };
  }, {});
};
