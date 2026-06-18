const no = 139;

export default {
    id: "shinx",
    name: "コリンク",
    en: "Shinx",
    no,
    groups: ["火山", "荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "荒野(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "マルノーム",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5319",
              url: "https://www.youtube.com/watch?v=Y2cHuUv-2X8",
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
            area: "荒野(昼) Lv3",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "ポカブ、マルノーム",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5242",
              url: "https://www.youtube.com/watch?v=XgWuWUDvrxo",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke2b.png`,
          info: {
            area: "火山 Lv2",
            pose: "変動(550)",
            position: "頭",
            friend: ["コリンク"],
            others: "チルタリス",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5142",
              url: "https://www.youtube.com/watch?v=Itv9hW22-e4",
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
            area: "荒野(昼) Lv2",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ポカブ、マルノーム",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5157",
              url: "https://www.youtube.com/watch?v=1oulOr7WIfE",
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
            area: "荒野(夜) Lv2",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["ポカブ"],
            others: "イワンコ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5170",
              url: "https://www.youtube.com/watch?v=xo-1N1O0y_o",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };