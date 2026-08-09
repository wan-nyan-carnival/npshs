const no = 229;

export default {
    id: "crustle",
    name: "イワパレス",
    en: "Crustle",
    no,
    groups: ["荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "固定(500)",
            position: "頭と頭の間",
            friend: ["バンギラス"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5258",
              url: "https://www.youtube.com/watch?v=X7GZOK7z1Lw",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2a.png`,
          info: {
            area: "荒野(夜) Lv2",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "サンド",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4972",
              url: "https://www.youtube.com/watch?v=AWCYqUSnLU8",
            },
            {
              name: "Quentin",
              score: "4876",
              url: "https://www.youtube.com/watch?v=JiD_J_XM80U",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke2b.png`,
          info: {
            area: "荒野(昼) Lv3",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "イワパレス",
          },
          videos: [
            {
              name: "Quentin",
              score: "4842",
              url: "https://www.youtube.com/watch?v=VKbX0EpZqv0",
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
            area: "荒野(昼) Lv3",
            pose: "固定(950)",
            position: "胴と胴の間",
            friend: ["イワパレス"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5378",
              url: "https://www.youtube.com/watch?v=vk5iPZsKFSo",
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
            pose: "固定(950)",
            position: "胴と胴の間",
            friend: ["バンギラス"],
            others: "サンド",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5671",
              url: "https://www.youtube.com/watch?v=2S3kDtfiyxE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };