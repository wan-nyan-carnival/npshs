const no = 70;

export default {
    id: "bulbasaur",
    name: "フシギダネ",
    en: "Bulbasaur",
    no,
    groups: ["樹海", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "樹海(夏)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "フシギダネ、ケンホロウ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5411",
              url: "https://www.youtube.com/watch?v=lhvzWuJBi60",
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
            area: "樹海(夏)",
            pose: "変動(800)",
            position: "頭と胴の間",
            friend: ["フシギダネ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5645",
              url: "https://www.youtube.com/watch?v=h7ZmnYUyTks",
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
            area: "樹海(夏)",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["フシギダネ"],
            others: "ケンホロウ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6005",
              url: "https://www.youtube.com/watch?v=Aj3rF7In9uc",
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
            pose: "固定(950)",
            position: "胴",
            friend: ["ジジーロン"],
            others: "シキジカ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5201",
              url: "https://www.youtube.com/watch?v=r322coeLV0w",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };