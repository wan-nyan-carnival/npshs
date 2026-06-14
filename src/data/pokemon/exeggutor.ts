const no = 81;

export default {
    id: "exeggutor",
    name: "ナッシー",
    en: "Exeggutor",
    no,
    groups: ["ビーチ", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ピカチュウ、マケンカニ、キレイハナ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5468",
              url: "https://www.youtube.com/watch?v=hIympYVTI1w",
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
            area: "ビーチ(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "キレイハナ、マケンカニ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5344",
              url: "https://www.youtube.com/watch?v=NQVX4TdN_rQ",
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
            area: "ビーチ(夜) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ザングース、ビビヨン、ピカチュウ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5290",
              url: "https://www.youtube.com/watch?v=EMtEUYWrllc",
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
            area: "ビーチ(夜) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: ["マケンカニ"],
            others: "ザングース、ビビヨン、ピカチュウ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5701",
              url: "https://www.youtube.com/watch?v=KUe_0J4_0y8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };