const no = 179;

export default {
    id: "dewgong",
    name: "ジュゴン",
    en: "Dewgong",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ジュゴン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5044",
              url: "https://www.youtube.com/watch?v=EVgvyKN8Kok",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ポッチャマ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5018",
              url: "https://www.youtube.com/watch?v=2D1Lm2TaU24",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(800)",
            position: "首と首の間",
            friend: ["ジュゴン"],
            others: "",
          },
          videos: [
            {
              name: "Pokemario6456",
              score: "5454",
              url: "https://www.youtube.com/watch?v=e_E3YQzBlEI",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "雪原(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["タマザラシ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4424",
              url: "https://www.youtube.com/watch?v=BdhWkcYyw_M",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };