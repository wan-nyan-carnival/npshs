const no = 21;

export default {
    id: "hoothoot",
    name: "ホーホー",
    en: "Hoothoot",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "コイキング、ピチュー、サルノリ、スワンナ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5595",
              url: "https://www.youtube.com/watch?v=9Rd36kCZFqM",
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
            area: "公園(夜) Lv2",
            pose: "変動(550)",
            position: "胴",
            friend: [""],
            others: "コイキング、ピチュー、サルノリ、スワンナ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5170",
              url: "https://www.youtube.com/watch?v=F2xc7BSapPU",
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
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["ピジョット"],
            others: "ミツハニー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5434",
              url: "https://www.youtube.com/watch?v=Dd0RICjIJBY",
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
            area: "公園(夜) Lv2",
            pose: "固定(950)",
            position: "胴",
            friend: ["ホーホー"],
            others: "スワンナ",
          },
          videos: [
            {
              name: "かける",
              score: "5536",
              url: "https://www.youtube.com/watch?v=QUnvdij_Qz8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };