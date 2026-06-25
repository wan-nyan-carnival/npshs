const no = 218;

export default {
    id: "feraligatr",
    name: "オーダイル",
    en: "Feraligatr",
    no,
    groups: ["リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "リバー(昼) Lv3",
            pose: "固定(500)",
            position: "頭",
            friend: ["ウパー"],
            others: "コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5036",
              url: "https://www.youtube.com/watch?v=B1S2x7yLJWw",
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
            area: "リバー(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "Quentin",
              score: "5193",
              url: "https://www.youtube.com/watch?v=_-WQehXq6TY",
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
            area: "リバー(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["オーダイル"],
            others: "コイキング",
          },
          videos: [
            {
              name: "Dmo",
              score: "5664",
              url: "https://www.youtube.com/watch?v=q8z1SMQMLy0",
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
            area: "リバー(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5160",
              url: "https://www.youtube.com/watch?v=2PWibHUqYLQ",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };