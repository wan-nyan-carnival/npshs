const no = 65;

export default {
    id: "deerling",
    name: "シキジカ",
    en: "Deerling",
    no,
    groups: ["樹海", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "樹海",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "シキジカ、メブキジカ、サーナイト",
          },
          videos: [
            {
              name: "Quentin",
              score: "5317",
              url: "https://www.youtube.com/watch?v=v5NQV6y6k-k",
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
            area: "樹海",
            pose: "変動(1000)",
            position: "胴",
            friend: ["シキジカ"],
            others: "メブキジカ、ハスボー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6207",
              url: "https://www.youtube.com/watch?v=MvHgoe3QdWo",
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
            area: "樹海(春)",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["フシギダネ"],
            others: "ケンホロウ、メブキジカ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5810",
              url: "https://www.youtube.com/watch?v=JhI6C_GdP5M",
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
            area: "樹海",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["シキジカ"],
            others: "メブキジカ、オーロット",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6107",
              url: "https://www.youtube.com/watch?v=tWwo8VHg_uY",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };