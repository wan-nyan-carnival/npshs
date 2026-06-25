const no = 54;

export default {
    id: "wooper",
    name: "ウパー",
    en: "Wooper",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "リーフィア",
          },
          videos: [
            {
              name: "Quentin",
              score: "5105",
              url: "https://www.youtube.com/watch?v=6sszqetR4NM",
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
            area: "リバー(夜) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: ["ヌオー"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5647",
              url: "https://www.youtube.com/watch?v=nyEeNf_gZOU",
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
            area: "ジャングル(夜) Lv1",
            pose: "固定(750)",
            position: "頭と頭の間",
            friend: ["ウパー"],
            others: "ヌオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5383",
              url: "https://www.youtube.com/watch?v=HuUJWqUu9Wk",
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
            area: "ジャングル(夜) Lv1",
            pose: "固定(750)",
            position: "頭と頭の間",
            friend: ["ウパー"],
            others: "ヌオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5465",
              url: "https://www.youtube.com/watch?v=V7JhvBB6FX8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };