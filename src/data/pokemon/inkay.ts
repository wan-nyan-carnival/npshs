const no = 87;

export default {
    id: "inkay",
    name: "マーイーカ",
    en: "Inkay",
    no,
    groups: ["ビーチ", "海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(夜) Lv1,2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "マーイーカ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5021",
              url: "https://www.youtube.com/watch?v=CrQZfLSCkRk",
            },
            {
              name: "Whom Snaps",
              score: "5007",
              url: "https://www.youtube.com/watch?v=QqRAvscMuZ0",
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
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "マナフィ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5013",
              url: "https://www.youtube.com/watch?v=bTxPL4HyKqI",
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
            area: "ビーチ(夜) Lv1,2",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "マーイーカ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "4942",
              url: "https://www.youtube.com/watch?v=u-eGk7r-7cE",
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
            area: "海上(夕) Lv2",
            pose: "変動(800)",
            position: "頭と頭の間",
            friend: ["ライチュウ"],
            others: "マーイーカ",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "4581",
              url: "https://www.youtube.com/watch?v=xr72HZrE10Q",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };