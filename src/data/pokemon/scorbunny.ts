const no = 4;

export default {
    id: "scorbunny",
    name: "ヒバニー",
    no,
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(昼)",
            pose: "変動(1000)",
            position: "頭",
            friend: ["ピチュー"],
            others: "スバメ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5659",
              url: "https://www.youtube.com/watch?v=GonUnmWW8S0",
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
            pose: "変動(800)",
            position: "頭と頭の中間",
            friend: ["サルノリ"],
            others: "キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5756",
              url: "https://www.youtube.com/watch?v=pasyiGgOAJ0",
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
            area: "砂漠(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            others: "エレザード",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5113",
              url: "https://www.youtube.com/watch?v=ElC4nucCKUI",
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
            pose: "950(固定)",
            position: "頭と頭の間",
            friend: ["ヒバニー"],
            others: "サルノリ、キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5903",
              url: "https://www.youtube.com/watch?v=99bpjjPWZuk",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };