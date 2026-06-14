const no = 94;

export default {
    id: "clamperl",
    name: "パールル",
    en: "Clamperl",
    no,
    groups: ["ビーチ", "海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(夜) Lv2",
            pose: "変動(1000)",
            position: "顔",
            friend: [""],
            others: "ビビヨン",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "5189",
              url: "https://www.youtube.com/watch?v=_3EynctQviw",
            },
            {
              name: "Pokemario6456",
              score: "5136",
              url: "https://www.youtube.com/watch?v=Z7wki-qkBSM",
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
            area: "ビーチ(夜) Lv1",
            pose: "変動(550)",
            position: "顔がある辺り",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "4538",
              url: "https://www.youtube.com/watch?v=d0MB_sWP3qk",
            },
            {
              name: "黒歌鳥",
              score: "4538",
              url: "https://www.youtube.com/watch?v=7FB4_cNrmmE",
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
            area: "海中 Lv3",
            pose: "変動(800)",
            position: "顔",
            friend: [""],
            others: "スターミー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4632",
              url: "https://www.youtube.com/watch?v=bs-Rk11cgUQ",
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
            area: "海中 Lv3",
            pose: "固定(950)",
            position: "顔",
            friend: [""],
            others: "パールル",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4925",
              url: "https://www.youtube.com/watch?v=5RiHP_Id6pM",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };