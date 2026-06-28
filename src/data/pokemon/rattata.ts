const no = 37;

export default {
    id: "rattata",
    name: "コラッタ",
    en:"Rattata",
    no,
    groups: ["キャンプ", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "キャンプ(入口)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アブリー、デデンネ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5022",
              url: "https://www.youtube.com/watch?v=nQ0EoLJyedQ",
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
            area: "キャンプ(入口)",
            pose: "固定(950)",
            position: "胴",
            friend: [""],
            others: "アブリー、デデンネ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5019",
              url: "https://www.youtube.com/watch?v=BPiC7dDHmDk",
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
            area: "キャンプ(入口)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ウソッキー、ヤブクロン、アブリー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5018",
              url: "https://www.youtube.com/watch?v=jvesp3n6ZoQ",
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
            area: "キャンプ(入口)",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["ヤブクロン"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5632",
              url: "https://www.youtube.com/watch?v=wm1cMPF9dwc",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };