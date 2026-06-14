const no = 80;

export default {
    id: "wingull",
    name: "キャモメ",
    en: "Wingull",
    no,
    groups: ["ビーチ", "海上", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海上(昼) Lv2",
            pose: "胴",
            position: "固定(500)",
            friend: [""],
            others: "ペリッパー、マンタイン、ピカチュウ、ホエルオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5049",
              url: "https://www.youtube.com/watch?v=ZxEA78HIIBo",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2a.png`,
          info: {
            area: "ビーチ(昼) Lv3",
            pose: "胴(※)",
            position: "変動(1000)",
            friend: [""],
            others: "ラプラス、マケンカニ、キャモメ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5003",
              url: "https://www.youtube.com/watch?v=5sKdnpxvSKg",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke2b.png`,
          info: {
            area: "ビーチ(昼) Lv3",
            pose: "胴",
            position: "変動(1000)",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5000",
              url: "https://www.youtube.com/watch?v=w8kS9oryod8",
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
            pose: "胴(※)",
            position: "変動(800)",
            friend: [""],
            others: "ケイコウオ、ピカチュウ、マンタイン、サメハダー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5142",
              url: "https://www.youtube.com/watch?v=dpHawQUshvY",
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
            position: "頭",
            friend: ["ケイコウオ"],
            others: "ピカチュウ、マンタイン、サメハダー、ゼニガメ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5926",
              url: "https://www.youtube.com/watch?v=mPiloCO-mCw",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };