const no = 119;

export default {
    id: "frillish",
    name: "プルリル",
    en: "Frillish",
    no,
    groups: ["海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海中 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "プルリル、ドククラゲ、グソクムシャ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5556",
              url: "https://www.youtube.com/watch?v=Hvc334tNo9E",
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
            area: "海中 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "プルリル",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5590",
              url: "https://www.youtube.com/watch?v=fIcT3dLxH10",
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
            area: "海中 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["プルリル"],
            others: "",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "6168",
              url: "https://www.youtube.com/watch?v=WBvkQdfW5CY",
            },
            {
              name: "黒歌鳥",
              score: "6162",
              url: "https://www.youtube.com/watch?v=zJUJcUGd-sc",
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
            area: "海中 Lv3",
            pose: "固定(750)",
            position: "胴",
            friend: ["ママンボウ"],
            others: "",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "4978",
              url: "https://www.youtube.com/watch?v=rLaItGfGAKQ",
            },
            {
              name: "黒歌鳥",
              score: "4968",
              url: "https://www.youtube.com/watch?v=GfcMHEWeoz4",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };