const no = 191;

export default {
    id: "drifloon",
    name: "フワンテ",
    en: "Drifloon",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "Quentin",
              score: "4937",
              url: "https://www.youtube.com/watch?v=VnHAvFpkOrI",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5185",
              url: "https://www.youtube.com/watch?v=si5Mcf-A2gE",
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
            area: "洞窟 Lv3",
            pose: "固定(500)",
            position: "下部",
            friend: ["バチュル"],
            others: "フワンテ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5162",
              url: "https://www.youtube.com/watch?v=yxK6wHYepM8",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["フワンテ"],
            others: "コイキング、オンバット",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5933",
              url: "https://www.youtube.com/watch?v=9utXk_nt_e4",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };