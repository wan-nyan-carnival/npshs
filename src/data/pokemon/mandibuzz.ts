const no = 129;

export default {
    id: "mandibuzz",
    name: "バルジーナ",
    en: "Mandibuzz",
    no,
    groups: ["砂漠", "荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "荒野(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ポカブ、アチャモ、コリンク",
          },
          videos: [
            {
              name: "Quentin",
              score: "5309",
              url: "https://www.youtube.com/watch?v=HXg5ES_RvPA",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "固定(500)",
            position: "胴",
            friend: [""],
            others: "イワンコ、ポカブ、アチャモ、コリンク、ビビヨン",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5215",
              url: "https://www.youtube.com/watch?v=J7sg0BfW5XQ",
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
            area: "砂漠(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アチャモ、バンギラス、コイキング、カバルドン",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5500",
              url: "https://www.youtube.com/watch?v=mmcH-xA9E5Q",
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
            area: "荒野(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["ガルーラ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5688",
              url: "https://www.youtube.com/watch?v=X_wlYmE6DlM",
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
            area: "砂漠(昼) Lv3",
            pose: "固定(750)",
            position: "胴",
            friend: [""],
            others: "アチャモ、バンギラス",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5335",
              url: "https://www.youtube.com/watch?v=_hnA7y0HTe0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };