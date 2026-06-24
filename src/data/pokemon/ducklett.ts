const no = 15;

export default {
    id: "ducklett",
    name: "コアルヒー",
    en: "Ducklett",
    groups: ["公園", ],
    no,
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "コアルヒー",
          },
          videos: [
            {
              name: "Milc",
              score: "",
              url: "https://www.youtube.com/watch?v=_9HIhAIJ85E",
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
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["コアルヒー"],
            others: "スワンナ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5256",
              url: "https://www.youtube.com/watch?v=OlHCnpAt9_s",
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
            area: "抜け道(夜)",
            pose: "固定(950)",
            position: "胴と胴の間",
            friend: ["コアルヒー"],
            others: "",
          },
          videos: [
            {
              name: "kosmicwaffle",
              score: "5684",
              url: "https://www.youtube.com/watch?v=8bP-aY16vS0",
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
            area: "公園(昼) Lv3",
            pose: "固定(950)",
            position: "頭(※)",
            friend: [""],
            others: "ビッパ、コイキング",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5593",
              url: "https://www.youtube.com/watch?v=YrrVmRUa-js",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };