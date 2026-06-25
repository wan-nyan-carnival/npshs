const no = 56;

export default {
    id: "swampert",
    name: "ラグラージ",
    en: "Swampert",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(夜) Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ネマシュ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5268",
              url: "https://www.youtube.com/watch?v=kDkWlxvxulQ",
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
            area: "ジャングル(夜) Lv2",
            pose: "変動(550)",
            position: "頭",
            friend: ["ウパー"],
            others: "リーフィア、ラグラージ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5206",
              url: "https://www.youtube.com/watch?v=lJggdfi_tOc",
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
            area: "ジャングル(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["アマカジ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5647",
              url: "https://www.youtube.com/watch?v=IW9tel_SJX0",
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
            area: "リバー(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["ラグラージ"],
            others: "ドデカバシ、トロピウス",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5704",
              url: "https://www.youtube.com/watch?v=WEjxcfOP_6Q",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };