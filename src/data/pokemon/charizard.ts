const no = 150;

export default {
    id: "charizard",
    name: "リザードン",
    en: "Charizard",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ヒトカゲ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5266",
              url: "https://www.youtube.com/watch?v=aQbC9z-R53c",
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
            area: "火山 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ヒトカゲ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5251",
              url: "https://www.youtube.com/watch?v=sii64QI_GgU",
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
            area: "火山 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["バクフーン"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5446",
              url: "https://www.youtube.com/watch?v=fTDbTxWVjcw",
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
            area: "火山 Lv3",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["バクフーン"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5452",
              url: "https://www.youtube.com/watch?v=IidTOLyR4W0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };