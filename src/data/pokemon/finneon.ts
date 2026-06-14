const no = 93;

export default {
    id: "finneon",
    name: "ケイコウオ",
    en: "Finneon",
    no,
    groups: ["ビーチ", "海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海中 Lv3",
            pose: "変動(550)",
            position: "胴",
            friend: [""],
            others: "サニーゴ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4752",
              url: "https://www.youtube.com/watch?v=lzp-dHoqJAM",
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
            area: "海中 Lv3",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "サニーゴ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5040",
              url: "https://www.youtube.com/watch?v=f-J2AJWJ3FA",
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
            pose: "固定(500)",
            position: "頭と胴の間",
            friend: ["キャモメ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5063",
              url: "https://www.youtube.com/watch?v=IDTyICMiogA",
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
            area: "ビーチ(昼) Lv3",
            pose: "変動(800)",
            position: "頭と角の根本の間",
            friend: ["サニーゴ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5073",
              url: "https://www.youtube.com/watch?v=W2m2G2jhy-k",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };