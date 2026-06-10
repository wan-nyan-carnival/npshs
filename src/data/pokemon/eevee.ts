const no = 29;

export default {
    id: "eevee",
    name: "イーブイ",
    en: "Eevee",
    no,
    groups: ["ベースキャンプ", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "キャンプ(研究所)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アブリー、ピカチュウ",
          },
          videos: [
            {
              name: "quo",
              score: "5158",
              url: "https://www.youtube.com/watch?v=OtlOKMkoAb8",
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
            area: "キャンプ(研究所)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アブリー、ピカチュウ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5067",
              url: "https://www.youtube.com/watch?v=cs7LPS97Z3g",
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
            area: "公園(イルミナ)",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ニンフィア、メガニウム",
          },
          videos: [
            {
              name: "Quentin",
              score: "5430",
              url: "https://www.youtube.com/watch?v=oMuHIHJfb4Q",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(800)",
            position: "頭",
            friend: ["ピカチュウ"],
            others: "ミツハニー、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5408",
              url: "https://www.youtube.com/watch?v=y6BCKDw228I",
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
            area: "キャンプ(入口)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アブリー、ムーランド",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "",
              url: "https://www.youtube.com/watch?v=SSon3sD6wdQ",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };