const no = 228;

export default {
    id: "tepig",
    name: "ポカブ",
    en: "Tepig",
    no,
    groups: ["荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "荒野(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ドガース",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5272",
              url: "https://www.youtube.com/watch?v=C-YC7nVCKCk",
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
            area: "荒野(夜) Lv1",
            pose: "変動(800)",
            position: "胴と頭の間",
            friend: ["アチャモ"],
            others: "コリンク",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5429",
              url: "https://www.youtube.com/watch?v=wQxMWwRrXXc",
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
            position: "頭",
            friend: ["アチャモ"],
            others: "コリンク、バルジーナ、ビビヨン、ゼラオラ",
          },
          videos: [
            {
              name: "Ahidoki",
              score: "5822",
              url: "https://www.youtube.com/watch?v=NbHVbGyTV6Q",
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
            area: "荒野(夜) Lv2",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["バルジーナ"],
            others: "アチャモ、イワンコ、コリンク、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5327",
              url: "https://www.youtube.com/watch?v=Lf4pBuS223Y",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };