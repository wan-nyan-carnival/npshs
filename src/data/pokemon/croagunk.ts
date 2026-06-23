const no = 190;

export default {
    id: "croagunk",
    name: "グレッグル",
    en: "Croagunk",
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
            others: "ヌメルゴン、ピッピ、バチュル",
          },
          videos: [
            {
              name: "Quentin",
              score: "5136",
              url: "https://www.youtube.com/watch?v=MJef_YHww9s",
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
            pose: "固定(750)",
            position: "胴",
            friend: [""],
            others: "ピッピ、バチュル",
          },
          videos: [
            {
              name: "Quentin",
              score: "4997",
              url: "https://www.youtube.com/watch?v=KTOvVGnNcg0",
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
            pose: "固定(750)",
            position: "胴と頭の間",
            friend: ["グレッグル"],
            others: "",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "",
              url: "https://www.youtube.com/watch?v=sPbKwfgAf1o",
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
            position: "胴と胴の間",
            friend: ["グレッグル"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5584",
              url: "https://www.youtube.com/watch?v=HITfGmaJIDI",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };