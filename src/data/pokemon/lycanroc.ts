const no = 134;

export default {
    id: "lycanroc",
    name: "ルガルガン",
    en: "Lycanroc",
    no,
    groups: ["砂漠", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "砂漠(昼) Lv3",
            pose: "変動(1000)",
            position: "顔",
            friend: [""],
            others: "カバルドン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5430",
              url: "https://www.youtube.com/watch?v=FexesHMiG1A",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "変動(1000)",
            position: "顔と顔の間",
            friend: ["ルガルガン"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5497",
              url: "https://www.youtube.com/watch?v=vcmWPDFgHBo",
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
            area: "荒野(昼) Lv3",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["イワンコ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5687",
              url: "https://www.youtube.com/watch?v=OCBaKCe8TBA",
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
            area: "砂漠(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ルガルガン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5408",
              url: "https://www.youtube.com/watch?v=H3efyCUa1PQ",
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
            area: "砂漠(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ルガルガン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5278",
              url: "https://www.youtube.com/watch?v=eO3Yt7fbpuc",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };