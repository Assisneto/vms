import { Container, Title } from "./styles";
import { useTranslation } from "react-i18next";
import { useRoute } from "@react-navigation/native";
import { Tabs } from "@components/tabs";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { SheetHeader } from "@components/sheetHeader";
import { Field } from "@components/field";
import { createFormKey } from "@utils/createFormKey";
import { formatData } from "@utils/formatData";

export const Home = () => {
  const router = useRoute();
  const { data } = router.params;
  const formattedData = formatData(data);

  const allData = {
    ...formattedData["group1"],
    ...formattedData["group2"],
    ...formattedData["group3"],
    ...formattedData["group4"]
  };

  const characteristicData = Object.values(allData).flat();
  const characteristicHeaderData = Object.values(
    formattedData["group5"]
  ).flat();

  const characteristicDataWithFormKey = createFormKey(
    characteristicData,
    "category_name",
    "id",
    "level"
  );
  const headerCharacteristicDataWithFormKey = createFormKey(
    characteristicHeaderData,
    "key",
    "value",
    "value"
  );
  const combinedData = {
    ...headerCharacteristicDataWithFormKey,
    ...characteristicDataWithFormKey
  };

  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    defaultValues: combinedData
  });

  const onSubmit = (data: any) => {
    console.log(formattedData);
  };

  return (
    <Container>
      <Tabs
        data={formattedData["group5"]}
        combinedData={characteristicHeaderData}
        control={control}
        Component={SheetHeader}
        headKeyField={"key"}
        tailKeyField={"value"}
        nameChildrenField={"key"}
      />
      <Tabs
        data={formattedData["group1"]}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={formattedData["group2"]}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={formattedData["group3"]}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={formattedData["group4"]}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Title>{t("vms")}</Title>
      </TouchableOpacity>
    </Container>
  );
};
