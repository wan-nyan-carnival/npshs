const no = 27;

export default {
    id: "shaymin",
    name: "シェイミ",
    en: "Shaymin",
    no,
    groups: ["公園", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv1",
            pose: "固定(1950)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "Quentin",
              score: "6005",
              url: "https://www.youtube.com/watch?v=ZVVw-7bWcbs",
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
            area: "公園(昼) Lv2",
            pose: "変動(2000)",
            position: "頭と頭の間",
            friend: ["サルノリ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6309",
              url: "https://www.youtube.com/watch?v=ly5aR424h4g",
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
            area: "公園(夜) Lv2",
            pose: "固定(1500)",
            position: "胴と胴の間",
            friend: ["ピチュー"],
            others: "ヒバニー、ニンフィア、ドダイトス、ミツハニー",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "6171",
              url: "https://www.youtube.com/watch?v=-3C8ukWMbl0",
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
            pose: "変動(2000)",
            position: "頭と頭の間",
            friend: ["ヒバニー"],
            others: "サルノリ、ピチュー、キュワワー",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "6743",
              url: "https://www.youtube.com/watch?v=PSJHmeaOEY8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };