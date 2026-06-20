const no = 171;

export default {
    id: "snorunt",
    name: "ユキワラシ",
    en: "Snorunt",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(550)",
            position: "顔",
            friend: [""],
            others: "バイバニラ、ユキワラシ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5022",
              url: "https://www.youtube.com/watch?v=Gii-5X5ymtQ",
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
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ユキワラシ、グラエナ、ウォーグル",
          },
          videos: [
            {
              name: "Quentin",
              score: "5196",
              url: "https://www.youtube.com/watch?v=7l7bpfHYK8w",
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
            position: "顔と胴の間",
            friend: ["ユキワラシ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5182",
              url: "https://www.youtube.com/watch?v=EgxU19-ASQc",
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
            pose: "変動(1000)",
            position: "顔と顔の間",
            friend: ["ユキワラシ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5191",
              url: "https://www.youtube.com/watch?v=t4zt6hrqEBw",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };