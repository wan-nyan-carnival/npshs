const no = 22;

export default {
    id: "comfey",
    name: "キュワワー",
    en: "Comfey",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5290",
              url: "https://www.youtube.com/watch?v=NKEqxNQ1cmU",
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
            area: "抜け道(昼)",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["ピチュー"],
            others: "ヒバニー、ドダイトス",
          },
          videos: [
            {
              name: "をる",
              score: "",
              url: "https://x.com/_woru_/status/1475814872759767043",
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
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "中央の赤い花",
            friend: [""],
            others: "キュワワー、バッフロン、ビビヨン",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5454",
              url: "https://www.youtube.com/watch?v=KEWJVProWDw",
            },
            {
              name: "Quentin",
              score: "5419",
              url: "https://www.youtube.com/watch?v=VOJ4scVcbzI",
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
            area: "公園(昼) Lv3",
            pose: "固定(750)",
            position: "中央の赤い花",
            friend: [""],
            others: "サルノリ、キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5134",
              url: "https://www.youtube.com/watch?v=6vjxO4C0IZE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };