const no = 16;

export default {
    id: "swanna",
    name: "スワンナ",
    en: "Swanna",
    no,
    groups: ["公園", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "胴と胴の間",
            friend: ["スワンナ"],
            others: "ビッパ、コアルヒー",
          },
          videos: [
            {
              name: "",
              score: "",
              url: "",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "目",
            friend: [""],
            others: "スワンナ、コアルヒー、ビッパ、モジャンボ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5372",
              url: "https://www.youtube.com/watch?v=ffK9V5Cr3GU",
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
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: ["コアルヒー"],
            others: "ピチュー、サルノリ、ドダイトス、ニンフィア",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5640",
              url: "https://www.youtube.com/watch?v=GUMaZL9sUTo",
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
            friend: [""],
            others: "スワンナ、コアルヒー、ビッパ、モジャンボ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5620",
              url: "https://www.youtube.com/watch?v=B5c5k15dMbw",
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
            area: "公園(夜) Lv2",
            pose: "変動(800)",
            position: "目",
            friend: [""],
            others: "スワンナ、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4999",
              url: "https://www.youtube.com/watch?v=qrWYUGvvnps",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };