const no = 192;

export default {
    id: "clefairy",
    name: "ピッピ",
    en: "Clefairy",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv2",
            pose: "変動(1000)",
            position: "顔",
            friend: [""],
            others: "オンバット",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5221",
              url: "https://www.youtube.com/watch?v=IrkWiBfXM7E",
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
            pose: "変動(1000)",
            position: "胴",
            friend: ["ピッピ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5836",
              url: "https://www.youtube.com/watch?v=0NWivfMtsGo",
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
            pose: "固定(750)",
            position: "顔と顔の間",
            friend: ["ピッピ"],
            others: "オンバット",
          },
          videos: [
            {
              name: "ちるこ",
              score: "",
              url: "https://www.youtube.com/watch?v=FYJx_4Ariws",
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
            pose: "固定(950)",
            position: "顔と顔の間",
            friend: ["ピッピ"],
            others: "オンバット",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "6099",
              url: "https://www.youtube.com/watch?v=M7rbNOGU_Q0",
            },
            {
              name: "Tripledubz",
              score: "",
              url: "https://www.youtube.com/watch?v=1BH3kaIIqu4",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };