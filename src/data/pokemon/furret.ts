const no = 155;

export default {
    id: "furret",
    name: "オオタチ",
    en: "Furret",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "固定(500)",
            position: "頭と頭の間",
            friend: ["グラエナ"],
            others: "サンドパン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5337",
              url: "https://www.youtube.com/watch?v=s70H8PZJcW0",
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
            area: "雪原(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "オオタチ、ウリムー",
          },
          videos: [
            {
              name: "Jbhmax",
              score: "5410",
              url: "https://www.youtube.com/watch?v=FRxujFWRaTM",
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
            area: "雪原(昼) Lv3",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "オオタチ、マニューラ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4707",
              url: "https://www.youtube.com/watch?v=3yWIlTONrms",
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
            pose: "固定(950)",
            position: "胴",
            friend: ["オオタチ"],
            others: "マニューラ",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "4905",
              url: "https://www.youtube.com/watch?v=He-JNK0KMBA",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };