const no = 43;

export default {
    id: "metapod",
    name: "トランセル",
    en: "Metapod",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "リバー(昼) Lv3",
            pose: "変動(550)",
            position: "胴と頭",
            friend: ["アゲハント"],
            others: "トランセル",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5155",
              url: "https://www.youtube.com/watch?v=YhspeVEVbZY",
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
            area: "リバー(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "エイパム",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5072",
              url: "https://www.youtube.com/watch?v=F0slfS2mFKE",
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
            area: "リバー(昼) Lv3",
            pose: "固定(750)",
            position: "胴と頭の間",
            friend: ["アゲハント"],
            others: "コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5103",
              url: "https://www.youtube.com/watch?v=mGps0GMsP48",
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
            area: "リバー(昼) Lv3",
            pose: "固定(950)",
            position: "胴と頭の間",
            friend: ["モグリュー"],
            others: "アーボック",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "5470",
              url: "https://www.youtube.com/watch?v=uNUs_57Cvz8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };