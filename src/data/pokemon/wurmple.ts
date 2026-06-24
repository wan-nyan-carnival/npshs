const no = 9;

export default {
    id: "wurmple",
    name: "ケムッソ",
    en: "Wurmple",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "首と首の間",
            friend: ["ケムッソ"],
            others: "",
          },
          videos: [
            {
              name: "Milc",
              score: "",
              url: "https://www.youtube.com/watch?v=yzme8D8HMnQ",
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
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["ケムッソ"],
            others: "エモンガ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5815",
              url: "https://www.youtube.com/watch?v=rlJA0l8NN3o",
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
            area: "抜け道(昼)",
            pose: "変動(800)",
            position: "首と首の間",
            friend: ["ケムッソ"],
            others: "キュワワー、ドダイトス",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5365",
              url: "https://www.youtube.com/watch?v=1u6SaCh_m2s",
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
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["スバメ"],
            others: "ケムッソ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5098",
              url: "https://www.youtube.com/watch?v=bnH-zNhiCPU",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };