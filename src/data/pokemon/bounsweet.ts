const no = 42;

export default {
    id: "bounsweet",
    name: "アマカジ",
    en: "Bounsweet",
    no,
    groups: ["ジャングル", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(昼) Lv1",
            pose: "固定(500)",
            position: "胴と頭の間",
            friend: ["ツツケラ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5170",
              url: "https://www.youtube.com/watch?v=nuTkDbiluAQ",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ミュウ、アーボック、アゲハント、メガヤンマ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5340",
              url: "https://www.youtube.com/watch?v=smDI0K4R-Qg",
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
            area: "ジャングル(夜) Lv1",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["アマカジ"],
            others: "アリアドス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5685",
              url: "https://www.youtube.com/watch?v=5wI1wgWIjM0",
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
            area: "ジャングル(夜) Lv2",
            pose: "固定(950)",
            position: "胴",
            friend: ["アマカジ"],
            others: "アリアドス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5165",
              url: "https://www.youtube.com/watch?v=ktygmA7VFcg",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };