const no = 44;

export default {
    id: "beautifly",
    name: "アゲハント",
    en: "Beautifly",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ヌオー、フシギバナ、コイキング、メッソン、ウパー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5515",
              url: "https://www.youtube.com/watch?v=LM3WeQYvRs4",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["コイキング"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5830",
              url: "https://www.youtube.com/watch?v=E--SE3P4rww",
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
            area: "ジャングル(昼) Lv3",
            pose: "固定(750)",
            position: "頭",
            friend: ["コイキング"],
            others: "ヌオー、フシギバナ、メッソン、ウパー",
          },
          videos: [
            {
              name: "Jbhmax",
              score: "5768",
              url: "https://www.youtube.com/watch?v=l1WN8Fbx3IQ",
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
            area: "ジャングル(昼) Lv3",
            pose: "固定(950)",
            position: "頭",
            friend: ["アゲハント"],
            others: "フシギバナ、コイキング、メッソン、ウパー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5679",
              url: "https://www.nicovideo.jp/watch/sm39292968",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };