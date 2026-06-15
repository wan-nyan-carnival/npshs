const no = 120;

export default {
    id: "golisopod",
    name: "グソクムシャ",
    en: "Golisopod",
    no,
    groups: ["海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海中 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "グソクムシャ、ランターン、スターミー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5282",
              url: "https://www.youtube.com/watch?v=m4owJhvigX4",
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
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "グソクムシャ、スターミー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5423",
              url: "https://www.youtube.com/watch?v=jZz7J9h_so8",
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
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "スターミー、ランターン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5354",
              url: "https://www.youtube.com/watch?v=qHeBUv98ItY",
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
            pose: "変動(1000)",
            position: "頭",
            friend: ["グソクムシャ"],
            others: "ランターン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5528",
              url: "https://www.youtube.com/watch?v=2oVL5s9aO_A",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };