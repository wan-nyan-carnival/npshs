const no = 58;

export default {
    id: "sobble",
    name: "メッソン",
    en: "Sobble",
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
            others: "リーフィア、ミュウ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5001",
              url: "https://www.youtube.com/watch?v=tFbMwaEPdMw",
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
            friend: [""],
            others: "アゲハント",
          },
          videos: [
            {
              name: "Quentin",
              score: "5111",
              url: "https://www.youtube.com/watch?v=MioeFl8hAFY",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3a.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "固定(950)",
            position: "頭と頭の間",
            friend: ["メッソン"],
            others: "アゲハント",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4872",
              url: "https://www.youtube.com/watch?v=h7VfLGXi6Xw",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["リーフィア"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4855",
              url: "https://www.youtube.com/watch?v=tQuS7YRE6_4",
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
            friend: ["リーフィア"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5719",
              url: "https://www.youtube.com/watch?v=Tpd9wXCAWMQ",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };