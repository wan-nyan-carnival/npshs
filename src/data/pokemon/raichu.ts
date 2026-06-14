const no = 96;

export default {
    id: "raichu",
    name: "ライチュウ",
    en: "Raichu",
    no,
    groups: ["ビーチ", "海上", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "カメックス、ナッシー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5064",
              url: "https://www.youtube.com/watch?v=iubi0wwc8Bw",
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
            area: "ビーチ(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "カメックス、サニーゴ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5274",
              url: "https://www.youtube.com/watch?v=e79xdGQv2S4",
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
            area: "ビーチ(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["ピカチュウ"],
            others: "ライチュウ、カメックス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5307",
              url: "https://www.youtube.com/watch?v=Z2bH72XKfgk",
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
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "マーイーカ、ホエルオー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5246",
              url: "https://www.youtube.com/watch?v=WniCR7lGU4s",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };