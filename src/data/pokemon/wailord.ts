const no = 104;

export default {
    id: "wailord",
    name: "ホエルオー",
    en: "Wailord",
    no,
    groups: ["海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海中(イルミナ)",
            pose: "変動(1000)",
            position: "口",
            friend: ["ヨワシ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5300",
              url: "https://www.youtube.com/watch?v=GB6jkZR6Wqs",
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
            area: "海上(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ピカチュウ、マンタイン、ペリッパー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5385",
              url: "https://www.youtube.com/watch?v=ldtRUU5___k",
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
            area: "海中(イルミナ)",
            pose: "変動(800)",
            position: "胴",
            friend: ["ヨワシ"],
            others: "",
          },
          videos: [
            {
              name: "Pokemario6456",
              score: "5448",
              url: "https://www.youtube.com/watch?v=BRN-odinwDU",
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
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ホエルオー、マーイーカ、マナフィ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5247",
              url: "https://www.youtube.com/watch?v=QXFWcy1D2oI",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };