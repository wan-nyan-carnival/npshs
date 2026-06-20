const no = 172;

export default {
    id: "glalie",
    name: "オニゴーリ",
    en: "Glalie",
    no,
    groups: ["雪原", "洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "メレシー、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5279",
              url: "https://www.youtube.com/watch?v=4zPjFdHCl-A",
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
            area: "洞窟 Lv2",
            pose: "変動(1000)",
            position: "顔",
            friend: [""],
            others: "メレシー、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5214",
              url: "https://www.youtube.com/watch?v=sl8DVB6GWcs",
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
            area: "雪原(昼) Lv1",
            pose: "変動(1000)",
            position: "顔",
            friend: [""],
            others: "ユキワラシ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5049",
              url: "https://www.youtube.com/watch?v=jklKFNhR6_A",
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
            area: "雪原(昼) Lv3",
            pose: "固定(950)",
            position: "胴と頭の間",
            friend: ["クレベース"],
            others: "",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5320",
              url: "https://www.youtube.com/watch?v=VinVwLe6kT8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };