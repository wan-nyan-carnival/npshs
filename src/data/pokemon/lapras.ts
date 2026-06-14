const no = 101;

export default {
    id: "lapras",
    name: "ラプラス",
    en: "Lapras",
    no,
    groups: ["海上", "海中", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海上(昼) Lv3",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ケイコウオ",
          },
          videos: [
            {
              name: "Ahidoki",
              score: "5067",
              url: "https://www.youtube.com/watch?v=W3rsMVxkqaQ",
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
            area: "海上(夕) Lv1,2",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "ヒドイデ、パールル、ビビヨン、フワライド、ホエルオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5443",
              url: "https://www.youtube.com/watch?v=794A54niUug",
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
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["サメハダー"],
            others: "ゼニガメ",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "5384",
              url: "https://www.youtube.com/watch?v=BebrpFy51tQ",
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
            pose: "変動(1000)",
            position: "首",
            friend: ["ラプラス"],
            others: "マナフィ、フワライド、パールル",
          },
          videos: [
            {
              name: "tripledubz",
              score: "5667",
              url: "https://www.twitch.tv/videos/2449001438",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };