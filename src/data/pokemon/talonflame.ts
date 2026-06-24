const no = 141;

export default {
    id: "talonflame",
    name: "ファイアロー",
    en: "Talonflame",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv3",
            pose: "固定(500)",
            position: "胴",
            friend: [""],
            others: "プテラ、ファイアロー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4949",
              url: "https://www.youtube.com/watch?v=dd52nndzoYc",
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
            position: "胴(※)と首の間",
            friend: ["チルタリス"],
            others: "アーケオス、バクフーン、レントラー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5494",
              url: "https://www.youtube.com/watch?v=gehgbHfYifw",
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
            position: "頭と頭の間",
            friend: ["ファイアロー"],
            others: "プテラ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5182",
              url: "https://www.youtube.com/watch?v=Sc1Lns1TFM8",
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
            area: "火山 Lv2",
            pose: "変動(1000)",
            position: "胴(※)と胴の間",
            friend: ["アーケオス"],
            others: "",
          },
          videos: [
            {
              name: "Tripledubz",
              score: "5872",
              url: "https://www.youtube.com/watch?v=wCf3lqtG20k",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };