const no = 25;

export default {
    id: "vespiquen",
    name: "ビークイン",
    en: "Vespiquen",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "下半身",
            friend: [""],
            others: "ミツハニー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5414",
              url: "https://www.youtube.com/watch?v=pll_xlz7xrI",
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
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "下半身",
            friend: [""],
            others: "ミツハニー、ピジョット",
          },
          videos: [
            {
              name: "Quentin",
              score: "5132",
              url: "https://www.youtube.com/watch?v=oFqz6k0pR60",
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
            area: "公園(夜) Lv1",
            pose: "変動(1000)",
            position: "頭・腰と胴の間",
            friend: ["ミツハニー"],
            others: "",
          },
          videos: [
            {
              name: "だれか",
              score: "",
              url: "https://www.youtube.com/watch?v=qPr37Rfxhc8",
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
            pose: "変動(1000)",
            position: "腰・下半身(と胴の間)",
            friend: ["ミツハニー"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5764",
              url: "https://www.youtube.com/watch?v=qxsDIcKZCss",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };