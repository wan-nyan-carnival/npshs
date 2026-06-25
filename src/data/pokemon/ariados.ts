const no = 49;

export default {
    id: "ariados",
    name: "アリアドス",
    en: "Ariados",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(夜) Lv1",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5157",
              url: "https://www.youtube.com/watch?v=Q7h7laOFwlU",
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
            area: "ジャングル(夜) Lv1",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5415",
              url: "https://www.youtube.com/watch?v=Hpy3Uh-XIWQ",
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
            position: "腹と腹の間",
            friend: ["アリアドス"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5630",
              url: "https://www.youtube.com/watch?v=Bf6urDlVL-k",
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
            area: "ジャングル(夜) Lv1",
            pose: "変動(1000)",
            position: "頭と胸の間",
            friend: ["メガヤンマ"],
            others: "アリアドス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5513",
              url: "https://www.youtube.com/watch?v=HeGDVT48k34",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };