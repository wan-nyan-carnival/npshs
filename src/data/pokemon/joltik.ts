const no = 184;

export default {
    id: "joltik",
    name: "バチュル",
    en: "Joltik",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "バチュル",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5023",
              url: "https://www.youtube.com/watch?v=ggQba0TC22A",
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
            position: "胴と胴の間",
            friend: ["バチュル"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5757",
              url: "https://www.youtube.com/watch?v=ccb0gZsg1FE",
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
            position: "胴と胴の間",
            friend: ["フワンテ"],
            others: "バチュル",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5121",
              url: "https://www.youtube.com/watch?v=pjoM_Jae6_o",
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
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "バケッチャ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4375",
              url: "https://www.youtube.com/watch?v=qPcYL2q5qvI",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };