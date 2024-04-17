import { Container, Title } from "./styles";
import { useTranslation } from "react-i18next";

import { Tabs } from "@components/tabs";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";
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
export const Home = () => {
  const { t } = useTranslation();
  const allData = { ...data, ...data2 };
  const combinedData = Object.values(allData).flat();
  const { control, handleSubmit } = useForm({
    defaultValues: combinedData.reduce(
      (acc, item) => ({
        ...acc,
        [`${item.category_name}[${item.id}]`]: item.level
      }),
      {}
    )
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <Tabs data={data} combinedData={combinedData} control={control} />
      <Tabs data={data2} combinedData={combinedData} control={control} />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Title>{t("vms")}</Title>
      </TouchableOpacity>
    </Container>
  );
};
