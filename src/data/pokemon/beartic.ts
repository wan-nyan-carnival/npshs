const no = 157;

export default {
    id: "beartic",
    name: "ツンベアー",
    en: "Beartic",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "固定(750)",
            position: "胴",
            friend: ["ツンベアー"],
            others: "クマシュン、クレベース",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "6014",
              url: "https://www.youtube.com/watch?v=L1AwWJlhdtk",
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
            position: "胴",
            friend: ["ポッチャマ"],
            others: "タマザラシ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5364",
              url: "https://www.youtube.com/watch?v=iIJVdzdvEZE",
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
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["ツンベアー"],
            others: "バイバニラ、クレベース、マンムー",
          },
          videos: [
            {
              name: "Quentin",
              score: "6300",
              url: "https://www.youtube.com/watch?v=I-1sA8KJHe4",
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
            position: "胴",
            friend: [""],
            others: "ジュゴン、クレベース、バイバニラ、エアームド",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5063",
              url: "https://www.youtube.com/watch?v=LWAgC-jsvCA",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };