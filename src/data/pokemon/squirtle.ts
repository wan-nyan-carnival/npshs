const no = 99;

export default {
    id: "squirtle",
    name: "ゼニガメ",
    en: "Squirtle",
    no,
    groups: ["海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海中 Lv3",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "ユレイドル、ネオラント",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4694",
              url: "https://www.youtube.com/watch?v=EBvwuq6y5Ps",
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
            area: "海上(夕) Lv2",
            pose: "変動(800)",
            position: "首",
            friend: [""],
            others: "ラプラス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5027",
              url: "https://www.youtube.com/watch?v=-cX8uQ8jBnM",
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
            pose: "固定(950)",
            position: "胴",
            friend: ["ラプラス"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5001",
              url: "https://www.youtube.com/watch?v=Of2BGi8-ujY",
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
            area: "海上(夕) Lv2",
            pose: "固定(950)",
            position: "胴(※)",
            friend: [""],
            others: "カメックス",
          },
          videos: [
            {
              name: "Quentin",
              score: "4972",
              url: "https://www.youtube.com/watch?v=w1opTxhpKPQ",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };