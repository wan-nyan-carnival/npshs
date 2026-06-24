const no = 140;

export default {
    id: "luxray",
    name: "レントラー",
    en: "Luxray",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv1",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["レントラー"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5729",
              url: "https://www.youtube.com/watch?v=RbKQZJgWNV0",
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
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "チルタリス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5163",
              url: "https://www.youtube.com/watch?v=r0Z9k0irQLQ",
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
            position: "頭",
            friend: ["ガチゴラス"],
            others: "",
          },
          videos: [
            {
              name: "Milc",
              score: "5308",
              url: "https://www.youtube.com/watch?v=nWWqKhSoi0A",
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
            position: "頭と頭の間",
            friend: ["ガチゴラス"],
            others: "ゴローン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5021",
              url: "https://www.youtube.com/watch?v=K8694J_euFo",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };