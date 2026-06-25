const no = 220;

export default {
    id: "psyduck",
    name: "コダック",
    en: "Psyduck",
    no,
    groups: ["リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "リバー(夜) Lv1",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ウパー、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5019",
              url: "https://www.youtube.com/watch?v=sKCkGOC5SN8",
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
            area: "リバー(昼) Lv2",
            pose: "固定(750)",
            position: "首",
            friend: ["アーボック"],
            others: "エイパム",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5073",
              url: "https://www.youtube.com/watch?v=UUTbFkewde0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3a.png`,
          info: {
            area: "リバー(昼) Lv1",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "コイキング、ギャラドス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5552",
              url: "https://www.youtube.com/watch?v=dm76dcGqnE0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "リバー(昼) Lv2",
            pose: "固定(750)",
            position: "首",
            friend: ["エイパム"],
            others: "アーボック",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5390",
              url: "https://www.youtube.com/watch?v=SGxkwW8qhh0",
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
            area: "リバー(昼) Lv2",
            pose: "固定(950)",
            position: "胴",
            friend: ["エイパム"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5456",
              url: "https://www.youtube.com/watch?v=iRIhdoCODTU",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };