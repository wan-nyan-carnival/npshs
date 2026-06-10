const no = 18;

export default {
    id: "taillow",
    name: "スバメ",
    en: "Taillow",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "スバメ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5317",
              url: "https://www.youtube.com/watch?v=x8agpldabf8",
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
            position: "胴と胴の間",
            friend: ["スバメ"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5340",
              url: "https://www.youtube.com/watch?v=SLJskfBktBs",
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
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["ケムッソ"],
            others: "スバメ、ビッパ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5137",
              url: "https://www.youtube.com/watch?v=WvKqSJOFr7E",
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
            position: "胴",
            friend: ["ケムッソ"],
            others: "スバメ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5265",
              url: "https://www.youtube.com/watch?v=-6G8ae6sWCc",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };