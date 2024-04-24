import { Container, Title } from "./styles";
import { useTranslation } from "react-i18next";

import { Tabs } from "@components/tabs";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { SheetHeader } from "@components/sheetHeader";
import { Field } from "@components/field";
import {
  CharacteristicItem,
  createFormKey,
  KeyValueItem
} from "@utils/createFormKey";

const data = {
  physical: [
    {
      id: "15955875-a408-4a75-b5cd-2b0800f53ca8",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "strength",
      category_name: "physical"
    },
    {
      id: "916a4efb-957d-444e-9248-0229ae1c30a2",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "dexterity",
      category_name: "physical"
    },
    {
      id: "3b7c2034-0218-4e8e-8d3d-e59b5bd7bfd5",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "stamina",
      category_name: "physical"
    }
  ],
  social: [
    {
      id: "4b16d85c-e314-47b0-9847-96ccdbda2b5d",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "charisma",
      category_name: "social"
    },
    {
      id: "e360ec6f-6405-4176-aea0-57b260ae9e2d",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "manipulation",
      category_name: "social"
    },
    {
      id: "b0af8702-2bc6-4127-9c7c-3ba5dc79fafe",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "appearance",
      category_name: "social"
    }
  ],
  mental: [
    {
      id: "3cad8d9d-ed50-4cc6-9373-34bc6055f48d",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "perception",
      category_name: "mental"
    },
    {
      id: "ef29c102-d9df-4523-a4d9-1f098dfbd283",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "intelligence",
      category_name: "mental"
    },
    {
      id: "af9d8ad9-e7fe-401d-8307-abb1cb4fb530",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "wits",
      category_name: "mental"
    }
  ]
};
const data2 = {
  talents: [
    {
      id: "03ad64e0-9358-468c-832b-e10a487db40d",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "alertness",
      category_name: "talents"
    },
    {
      id: "64b0bd20-90a9-4653-9741-9c07a506aa21",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "athletics",
      category_name: "talents"
    },
    {
      id: "644e426a-ac10-4c5f-bceb-8a455c02c6be",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "brawl",
      category_name: "talents"
    },
    {
      id: "e1877e08-c5d1-45ef-9855-b6393878f97d",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "dodge",
      category_name: "talents"
    },
    {
      id: "bde6bb3e-7366-43ed-93d2-c76b9459e5fb",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "empathy",
      category_name: "talents"
    },
    {
      id: "78349178-cd58-44f7-b718-6cab15c035e3",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "expression",
      category_name: "talents"
    },
    {
      id: "613c7c0f-7416-4e1c-809b-872f6b57d7f4",
      level: 5,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "intimidation",
      category_name: "talents"
    },
    {
      id: "d49fdecd-740e-4df9-91fe-2194b0ba11a5",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "leadership",
      category_name: "talents"
    },
    {
      id: "3299c2ff-b4b9-403b-ab10-21ca970481ff",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "streetwise",
      category_name: "talents"
    },
    {
      id: "678463fa-e694-456a-8684-c6a6ff0c45c3",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "subterfuge",
      category_name: "talents"
    }
  ],
  skills: [
    {
      id: "509b0afb-b090-4ab5-bf9d-0d9017eafce5",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "animal_ken",
      category_name: "skills"
    },
    {
      id: "f699fee0-fec3-4130-bfdd-0d52ed3d1eb9",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "crafts",
      category_name: "skills"
    },
    {
      id: "bfebd782-a5d5-48be-bcb2-656499c637de",
      level: 5,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "drive",
      category_name: "skills"
    },
    {
      id: "d2afdcda-e6df-4645-9ebe-d0162cbde3fb",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "etiquette",
      category_name: "skills"
    },
    {
      id: "0a140958-6e29-4af7-ac16-9e7d3ddc704d",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "firearms",
      category_name: "skills"
    },
    {
      id: "4395ee9a-f84d-4f0f-b368-a31110e27fb4",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "melee",
      category_name: "skills"
    },
    {
      id: "97496301-5a3e-4a53-a5ca-3c5b7935a8a7",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "performance",
      category_name: "skills"
    },
    {
      id: "95f96e91-14e8-4a86-b50e-649ebf35bdc5",
      level: 5,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "security",
      category_name: "skills"
    },
    {
      id: "b211f781-1722-44da-8856-c0c981a14587",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "stealth",
      category_name: "skills"
    },
    {
      id: "887c7095-d746-4b6c-94b7-57f604db27a4",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "survival",
      category_name: "skills"
    }
  ],
  knowledges: [
    {
      id: "d6bce8e9-cd84-4175-b5e3-56d06b784d48",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "academics",
      category_name: "knowledges"
    },
    {
      id: "9cf7a7e8-c4a3-4c6b-8074-cf16e59061ca",
      level: 10,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-14T18:17:07Z",
      characteristic_name: "computer",
      category_name: "knowledges"
    },
    {
      id: "98c6704a-f3ff-4fe0-a1a5-cdffc4499061",
      level: 5,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "finance",
      category_name: "knowledges"
    },
    {
      id: "f63892c8-917f-4c16-a783-b1d102a1c826",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "investigation",
      category_name: "knowledges"
    },
    {
      id: "a82881b2-a1a6-4fa9-b548-af193bb9e58f",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "law",
      category_name: "knowledges"
    },
    {
      id: "61871252-a76c-4060-a160-b0005c05a119",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "linguistics",
      category_name: "knowledges"
    },
    {
      id: "2239ab1b-a7d2-47ee-be27-0aded8f22ee5",
      level: 2,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "medicine",
      category_name: "knowledges"
    },
    {
      id: "5eb28f38-e7e0-4aeb-b2f4-3987fbc80b2a",
      level: 5,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "occult",
      category_name: "knowledges"
    },
    {
      id: "f04623d8-d516-4f72-ae43-25a143f9aa68",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "politics",
      category_name: "knowledges"
    },
    {
      id: "1bb9ab79-ee9d-4747-8569-05d9bcc36c25",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "science",
      category_name: "knowledges"
    }
  ]
};

const data3 = {
  backgrounds: [
    {
      id: "e3a962af-f7fe-495d-8aed-4443e4f6a497",
      level: 4,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Recursos",
      category_name: "backgrounds"
    },
    {
      id: "9ae0018f-f58a-4ed4-b3c3-f96b0baf844f",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Aliados",
      category_name: "backgrounds"
    },
    {
      id: "13a36a9b-d2a6-4ae0-8cbd-34df39418880",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "contatos",
      category_name: "backgrounds"
    },
    {
      id: "4b8b1a18-470b-44bc-883d-a728cff9d117",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Rebanho",
      category_name: "backgrounds"
    }
  ],
  virtues: [
    {
      id: "0ba4c80f-81cf-4049-99e4-e1957e3f8f06",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "conscience",
      category_name: "virtues"
    },
    {
      id: "a56dae9b-300c-4b3d-b69e-6848a66e269a",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "self_control",
      category_name: "virtues"
    },
    {
      id: "01e8f617-e30e-466a-a110-11ff9d73a64f",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "courage",
      category_name: "virtues"
    }
  ],
  disciplines: [
    {
      id: "a4db9773-877e-4248-a4d1-bcedb41cfde4",
      level: 3,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Fortitude",
      category_name: "disciplines"
    },
    {
      id: "87e3c9bc-dee2-439d-8c22-3c1d5faead06",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Presenca",
      category_name: "disciplines"
    },
    {
      id: "ae974c0c-d6a3-4da0-8a9c-71d969ce7ded",
      level: 1,
      inserted_at: "2024-03-12T17:55:47Z",
      updated_at: "2024-03-12T17:55:47Z",
      characteristic_name: "Ofuscacao",
      category_name: "disciplines"
    }
  ]
};

const data4 = {
  flaws: [
    {
      id: "2cf5f12f-950d-4420-863c-dfcc1e6bb1a0",
      level: 4,
      inserted_at: "2024-04-18T00:13:54Z",
      updated_at: "2024-04-18T00:13:54Z",
      category_name: "flaws",
      characteristic_name: "Inimigo"
    }
  ],
  merits: [
    {
      id: "0245ef5a-f75e-46a8-852e-f36128dda542",
      level: 1,
      inserted_at: "2024-04-18T00:13:54Z",
      updated_at: "2024-04-18T00:13:54Z",
      category_name: "merits",
      characteristic_name: "Bom senso"
    },
    {
      id: "497e5c90-3ed1-4309-9ca2-11306e655f71",
      level: 2,
      inserted_at: "2024-04-18T00:13:54Z",
      updated_at: "2024-04-18T00:13:54Z",
      category_name: "merits",
      characteristic_name: "Lider Nato"
    }
  ],
  others: [
    {
      id: "9f7f0c95-eb46-4720-bb87-c1bf63b725b0",
      level: 5,
      inserted_at: "2024-04-18T00:13:54Z",
      updated_at: "2024-04-18T00:13:54Z",
      category_name: "others",
      characteristic_name: "Humanity"
    },
    {
      id: "148ddf70-7ba3-4319-9990-74ed0a95755b",
      level: 10,
      inserted_at: "2024-04-18T00:13:54Z",
      updated_at: "2024-04-18T00:13:54Z",
      category_name: "others",
      characteristic_name: "Blood points"
    }
  ]
};
const data5 = {
  first: [
    {
      id: "",
      value: "Benimary",
      key: "Name",
      category_name: "first"
    },
    {
      id: "76fbc14e-a3bc-4fe7-aaf6-63ccf90f46ec",
      value: "Maycon",
      key: "Jogador",
      category_name: "first"
    },
    {
      id: "b5246b48-a28c-49de-aebd-937cc46cec34",
      value: "Noite escura",
      key: "Chronicle",
      category_name: "first"
    }
  ],
  second: [
    {
      id: "fca6142b-79b9-4255-9df0-0e2dd77b5ed6",
      value: "bon-vivant",
      key: "Natureza",
      category_name: "second"
    },
    {
      id: "4fa658bc-e25b-458e-a974-c9970b062d1f",
      value: "3",
      key: "geracao",
      category_name: "second"
    },
    {
      id: "0456a1c1-0ff2-478b-a3a5-802420bcc82c",
      value: "Masoquista",
      key: "Comportamento",
      category_name: "second"
    }
  ],
  third: [
    {
      id: "e2a05a0d-9ec9-48ed-a219-9fb3d00b56a0",
      value: "Brujah",
      key: "Cla",
      category_name: "third"
    },
    {
      id: "2f71acb7-5dbf-4aaf-8e27-bd9b2f2cc145",
      value: "Casa na arvore",
      key: "Refugio",
      category_name: "third"
    },
    {
      id: "74e8f075-8751-44e7-9ce0-2d10e6a44c3b",
      value: "Lutador",
      key: "Conceito",
      category_name: "third"
    }
  ]
};

type CombinedItem = CharacteristicItem | KeyValueItem;

export const Home = () => {
  const { t } = useTranslation();
  const allData = { ...data, ...data2, ...data3, ...data4 };
  const characteristicData = Object.values(allData).flat();
  const characteristicHeaderData = Object.values(data5).flat();
  const alldata2 = [...characteristicData, ...characteristicHeaderData];
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

  const { control, handleSubmit } = useForm({
    defaultValues: combinedData
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <Tabs<KeyValueItem>
        data={data5}
        combinedData={characteristicHeaderData}
        control={control}
        Component={SheetHeader}
        headKeyField={"key"}
        tailKeyField={"value"}
        nameChildrenField={"key"}
      />
      <Tabs<CharacteristicItem>
        data={data}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={data2}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={data3}
        combinedData={characteristicData}
        control={control}
        Component={Field}
        headKeyField={"category_name"}
        tailKeyField={"id"}
        nameChildrenField={"characteristic_name"}
      />
      <Tabs
        data={data4}
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
