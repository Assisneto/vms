export function formatData(data) {
  const dividedData = {
    group1: {
      physical: [],
      social: [],
      mental: []
    },
    group2: {
      talents: [],
      skills: [],
      knowledges: []
    },
    group3: {
      backgrounds: [],
      virtues: [],
      disciplines: []
    },
    group4: {
      flaws: [],
      merits: [],
      others: []
    },
    group5: {
      first: [
        {
          id: "",
          value: data.name,
          key: "Name",
          category_name: "first"
        },
        {
          id: data.user_id,
          value: data.user_id,
          key: "Jogador",
          category_name: "first"
        },
        {
          id: data.chronicle_id,
          value: data.chronicle_id,
          key: "Chronicle",
          category_name: "first"
        }
      ],
      second: [],
      third: []
    }
  };

  function addToCategory(category, item, group) {
    group.push({
      id: item.id,
      level: item.level,
      inserted_at: data.inserted_at,
      updated_at: data.updated_at,
      characteristic_name: item.characteristic_name,
      category_name: category
    });
  }

  ["physical", "social", "mental"].forEach((category) => {
    data.characteristics[category].forEach((item) => {
      addToCategory(category, item, dividedData.group1[category]);
    });
  });

  ["talents", "skills", "knowledges"].forEach((category) => {
    data.characteristics[category].forEach((item) => {
      addToCategory(category, item, dividedData.group2[category]);
    });
  });

  ["backgrounds", "virtues", "disciplines"].forEach((category) => {
    data.characteristics[category].forEach((item) => {
      addToCategory(category, item, dividedData.group3[category]);
    });
  });

  ["flaws", "merits", "others"].forEach((category) => {
    data.characteristics[category].forEach((item) => {
      addToCategory(category, item, dividedData.group4[category]);
    });
  });

  data.race_characteristics.forEach((item) => {
    let group;
    if (["Natureza", "geracao", "Comportamento"].includes(item.key)) {
      group = dividedData.group5.second;
    } else if (["Cla", "Refugio", "Conceito"].includes(item.key)) {
      group = dividedData.group5.third;
    }
    group.push({
      id: item.id,
      value: item.value,
      key: item.key,
      category_name: group === dividedData.group5.second ? "second" : "third"
    });
  });

  return dividedData;
}
