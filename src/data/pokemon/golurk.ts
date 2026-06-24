const no = 210;

export default {
    id: "golurk",
    name: "ゴルーグ",
    en: "Golurk",
    no,
    groups: ["遺跡", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "遺跡 Lv3",
            pose: "変動(1000)",
            position: "腰",
            friend: [""],
            others: "オーベム、ジラーチ、ワタシラガ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5337",
              url: "https://www.youtube.com/watch?v=RU5Gd-_nWFs",
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
            position: "腰",
            friend: [""],
            others: "シャンデラ、オーベム、ジラーチ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5379",
              url: "https://www.youtube.com/watch?v=yDDvI8wkTsE",
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
            area: "遺跡 Lv3",
            pose: "変動(800)",
            position: "腰",
            friend: ["オーベム"],
            others: "ジラーチ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5308",
              url: "https://www.youtube.com/watch?v=PvALxmA2n4s",
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
            pose: "固定(950)",
            position: "腰と胴の間",
            friend: ["ゴルーグ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5633",
              url: "https://www.youtube.com/watch?v=wArLnjujy3M",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };