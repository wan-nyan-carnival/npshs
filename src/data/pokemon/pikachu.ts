const no = 30;

export default {
    id: "pikachu",
    name: "ピカチュウ",
    en:"Pikachu",
    no,
    groups: ["キャンプ", "ビーチ", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ビーチ(夜) Lv2",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["ピカチュウ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5544",
              url: "https://www.youtube.com/watch?v=MSdMdoBIqx8",
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
            area: "ビーチ(夜) Lv2",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["ピカチュウ"],
            others: "スナバァ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5523",
              url: "https://www.youtube.com/watch?v=Ij7WYDv84LI",
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
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["イーブイ"],
            others: "ミツハニー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5571",
              url: "https://www.youtube.com/watch?v=huZyvFODynA",
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
            area: "ビーチ(昼) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "キレイハナ、マケンカニ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "",
              url: "https://www.youtube.com/watch?v=T_vqTbVJn7g",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };