const no = 189;

export default {
    id: "pumpkaboo",
    name: "バケッチャ",
    en: "Pumpkaboo",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "バチュル",
          },
          videos: [
            {
              name: "Quentin",
              score: "4758",
              url: "https://www.youtube.com/watch?v=wmZYab_oA-o",
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
            others: "サザンドラ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5009",
              url: "https://www.youtube.com/watch?v=ByEEZkW_FSw",
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
            pose: "変動(800)",
            position: "胴",
            friend: ["バケッチャ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5289",
              url: "https://www.youtube.com/watch?v=svghd4ZFAog",
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
            position: "胴と頭の間",
            friend: ["オンバット"],
            others: "メレシー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5410",
              url: "https://www.youtube.com/watch?v=_-Khw0CrdsE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };