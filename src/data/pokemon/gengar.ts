const no = 187;

export default {
    id: "gengar",
    name: "ゲンガー",
    en: "Gengar",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "フワンテ、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5101",
              url: "https://www.youtube.com/watch?v=bJaEHSrDfIQ",
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
            area: "洞窟 Lv3",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "フワンテ、コイキング",
          },
          videos: [
            {
              name: "Quentin",
              score: "5145",
              url: "https://www.youtube.com/watch?v=uX9JC-RhdzU",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "フワンテ",
          },
          videos: [
            {
              name: "Quentin",
              score: "4916",
              url: "https://www.youtube.com/watch?v=MdKRTAYgzK8",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "顔",
            friend: ["クロバット"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5188",
              url: "https://www.youtube.com/watch?v=HneRBHEoj_s",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };