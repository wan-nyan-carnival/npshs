const no = 183;

export default {
    id: "crobat",
    name: "クロバット",
    en: "Crobat",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "変動(800)",
            position: "頭と胴の間",
            friend: ["ゲンガー"],
            others: "",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5308",
              url: "https://www.youtube.com/watch?v=71-reTyu1mk",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "イシツブテ、ラムパルド、サザンドラ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5019",
              url: "https://www.youtube.com/watch?v=Bv6TxZpXk-4",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ゲンガー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4939",
              url: "https://www.youtube.com/watch?v=_Rl_2-ggY_8",
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
            area: "洞窟 Lv3",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "イシツブテ、ラムパルド、サザンドラ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5130",
              url: "https://www.youtube.com/watch?v=ORUaKv9VtPc",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };