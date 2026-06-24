const no = 202;

export default {
    id: "eldegoss",
    name: "ワタシラガ",
    en: "Eldegoss",
    no,
    groups: ["遺跡", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "遺跡 Lv2",
            pose: "固定(500)",
            position: "綿",
            friend: ["ワタシラガ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5247",
              url: "https://www.youtube.com/watch?v=wT7fLKo3LIs",
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
            area: "遺跡 Lv3",
            pose: "変動(1000)",
            position: "綿",
            friend: [""],
            others: "ネイティ、ヘルガー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5177",
              url: "https://www.youtube.com/watch?v=JHdLwK2bNxA",
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
            area: "遺跡 Lv2",
            pose: "変動(800)",
            position: "胴",
            friend: ["ワタシラガ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5535",
              url: "https://www.youtube.com/watch?v=rB9Qf51_dlg",
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
            area: "遺跡 Lv3",
            pose: "変動(1000)",
            position: "綿",
            friend: [""],
            others: "ネイティ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5085",
              url: "https://www.youtube.com/watch?v=srUzAwhXS-o",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };