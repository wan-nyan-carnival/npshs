const no = 89;

export default {
    id: "machamp",
    name: "カイリキー",
    en: "Machamp",
    no,
    groups: ["ビーチ", "海上", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海上(昼) Lv1",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "キャモメ、ペリッパー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5226",
              url: "https://www.youtube.com/watch?v=PJ96ohnNGpk",
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
            area: "海上(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "キャモメ、ペリッパー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5214",
              url: "https://www.youtube.com/watch?v=mLJ5mNvKL88",
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
            area: "海上(昼) Lv3",
            pose: "固定(500)",
            position: "頭",
            friend: ["サメハダー"],
            others: "ホエルオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5305",
              url: "https://www.youtube.com/watch?v=5aeEIslfz7Y",
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
            area: "海上(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ビビヨン",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5051",
              url: "https://www.youtube.com/watch?v=vDZDz1r5Jjk",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };