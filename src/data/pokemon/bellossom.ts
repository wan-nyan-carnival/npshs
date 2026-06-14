const no = 86;

export default {
    id: "bellossom",
    name: "キレイハナ",
    en: "Bellossom",
    no,
    groups: ["ビーチ", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(夜) Lv1",
            pose: "変動(800)",
            position: "胴と胴の間",
            friend: ["キレイハナ"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5448",
              url: "https://www.youtube.com/watch?v=uN7RsCBQEJc",
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
            area: "ビーチ(昼) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["ピカチュウ"],
            others: "キレイハナ、マケンカニ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5573",
              url: "https://www.youtube.com/watch?v=Fo8R-arCdoU",
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
            area: "ビーチ(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "キレイハナ",
          },
          videos: [
            {
              name: "",
              score: "",
              url: "",
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
            area: "ビーチ(昼) Lv2",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["ピカチュウ"],
            others: "キレイハナ、マケンカニ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5677",
              url: "https://www.youtube.com/watch?v=MiNwWV1EE24",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };