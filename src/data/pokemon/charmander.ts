const no = 149;

export default {
    id: "charmander",
    name: "ヒトカゲ",
    en: "Charmander",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv3",
            pose: "変動(1000)",
            position: "首",
            friend: ["ブースター"],
            others: "コータス",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "6030",
              url: "https://www.youtube.com/watch?v=ueZNUd74C7Y",
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
            pose: "変動(800)",
            position: "首",
            friend: ["ブースター"],
            others: "マグマッグ、コータス",
          },
          videos: [
            {
              name: "Nicole",
              score: "5886",
              url: "https://www.youtube.com/watch?v=OmhTH3gkhHY",
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
            position: "首",
            friend: ["ヒトカゲ"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "6088",
              url: "https://www.youtube.com/watch?v=IwULzLnQhK8",
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
            position: "頭",
            friend: [""],
            others: "ブースター、マグマッグ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5457",
              url: "https://www.youtube.com/watch?v=euHgXcGXvtE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };