const no = 170;

export default {
    id: "crabominable",
    name: "ケケンカニ",
    en: "Crabominable",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv3",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "ケケンカニ、バイバニラ、グラエナ、エアームド、ビビヨン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5092",
              url: "https://www.youtube.com/watch?v=7nlAfuvFSmo",
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
            others: "ケケンカニ、バイバニラ、グラエナ、ビビヨン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5202",
              url: "https://www.youtube.com/watch?v=cCOdWKGWX-A",
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
            position: "頭と胴の間",
            friend: ["ケケンカニ"],
            others: "グラエナ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5023",
              url: "https://www.youtube.com/watch?v=r6Kix9dY5PA",
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
            pose: "変動(800)",
            position: "胴と胴の間",
            friend: ["ケケンカニ"],
            others: "グラエナ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5044",
              url: "https://www.youtube.com/watch?v=CvvMFN_PVx4",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };