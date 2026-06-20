const no = 176;

export default {
    id: "piplup",
    name: "ポッチャマ",
    en: "Piplup",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["ポッチャマ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5649",
              url: "https://www.youtube.com/watch?v=b-vI7gXlASs",
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
            pose: "変動(800)",
            position: "頭",
            friend: ["ポッチャマ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5534",
              url: "https://www.youtube.com/watch?v=tiCh2eHrOxk",
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
            pose: "変動(1000)",
            position: "頭(※)",
            friend: [""],
            others: "ポッチャマ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5124",
              url: "https://www.youtube.com/watch?v=UDslqGOCxYs",
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
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["グレイシア"],
            others: "タマザラシ、ロコン、ユキメノコ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5211",
              url: "https://www.youtube.com/watch?v=-vbr1ZbVFpk",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };