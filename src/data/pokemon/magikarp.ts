const no = 20;

export default {
    id: "magikarp",
    name: "コイキング",
    en: "Magikarp",
    no,
    groups: ["公園", "ジャングル", "砂漠", "ビーチ", "海上", "海中", "樹海", "雪原", "洞窟", "遺跡", "抜け道", "リバー", "荒野", ],    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ビークイン、ミツハニー、ドダイトス",
          },
          videos: [
            {
              name: "Quentin",
              score: "5245",
              url: "https://www.youtube.com/watch?v=anXL5JOgF-k",
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
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "アゲハント、フシギバナ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5461",
              url: "https://www.youtube.com/watch?v=npgyhWk3ZPE",
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
            area: "リバー(昼) Lv1",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["ドデカバシ"],
            others: "コダック？",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5466",
              url: "https://www.youtube.com/watch?v=Le4hCF4Vx50",
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
            position: "胴(※)",
            friend: ["ピジョット"],
            others: "ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5649",
              url: "https://www.youtube.com/watch?v=M4gZ1_7l1xU",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };