const no = 102;

export default {
    id: "mantine",
    name: "マンタイン",
    en: "Mantine",
    no,
    groups: ["海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "カメックス、ゼニガメ、ビビヨン、キャモメ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5208",
              url: "https://www.youtube.com/watch?v=vyjv86WB5GA",
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
            area: "海上(昼) Lv1",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "マンタイン、ピカチュウ",
          },
          videos: [
            {
              name: "Quentin",
              score: "4823",
              url: "https://www.youtube.com/watch?v=2EZYFNOLFII",
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
            area: "海上(昼) Lv3",
            pose: "固定(750)",
            position: "胴と頭の間(風景優先)",
            friend: ["ピカチュウ"],
            others: "ヒドイデ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5390",
              url: "https://www.youtube.com/watch?v=ZbSt_pqbBp0",
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
            area: "海上(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["ピカチュウ"],
            others: "ラプラス、ゼニガメ、キャモメ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5363",
              url: "https://www.youtube.com/watch?v=zcAUYfeP_qY",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };