const no = 225;

export default {
    id: "diglett",
    name: "ディグダ",
    en: "Diglett",
    no,
    groups: ["荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "変動(800)",
            position: "胴と顔の間",
            friend: ["ディグダ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5267",
              url: "https://www.youtube.com/watch?v=yGlxKoirBPQ",
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
            area: "荒野(夜) Lv2",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5013",
              url: "https://www.youtube.com/watch?v=xD5idlwLVgY",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3a.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "変動(550)",
            position: "胴と胴の間",
            friend: ["サンド"],
            others: "",
          },
          videos: [
            {
              name: "tripledubz",
              score: "5250",
              url: "https://www.twitch.tv/videos/2403600979",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "荒野(昼) Lv3",
            pose: "変動(800)",
            position: "胴と胴の間",
            friend: ["アチャモ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5006",
              url: "https://www.youtube.com/watch?v=8n51RN6OKgs",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "固定(500)",
            position: "顔と胴の間",
            friend: ["ディグダ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5181",
              url: "https://www.youtube.com/watch?v=5r1ahvtGw3U",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };