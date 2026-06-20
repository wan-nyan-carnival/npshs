const no = 167;

export default {
    id: "delibird",
    name: "デリバード",
    en: "Delibird",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "固定(500)",
            position: "胴と胴の間",
            friend: ["ポッチャマ"],
            others: "ユキハミ、スイクン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5210",
              url: "https://www.youtube.com/watch?v=N8vVdSgzrgg",
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
            area: "雪原(夜) Lv2",
            pose: "変動(800)",
            position: "首と頭の間",
            friend: ["ポッチャマ"],
            others: "ユキハミ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5374",
              url: "https://www.youtube.com/watch?v=TM-LPNWLCzI",
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
            position: "首",
            friend: [""],
            others: "デリバード、オオタチ、ユキワラシ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "",
              url: "https://www.youtube.com/watch?v=D27d4aeo5Oo",
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
            area: "雪原(夜) Lv2",
            pose: "固定(950)",
            position: "首",
            friend: [""],
            others: "ルージュラ、バイバニラ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5279",
              url: "https://www.youtube.com/watch?v=2bs9NQgv3kE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };