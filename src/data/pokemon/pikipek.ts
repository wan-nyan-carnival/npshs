const no = 47;

export default {
    id: "pikipek",
    name: "ツツケラ",
    en: "Pikipek",
    no,
    groups: ["ジャングル", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(夜) Lv2",
            pose: "変動(800)",
            position: "胴(※)",
            friend: [""],
            others: "ツツケラ、レパルダス、コイキング、ヌオー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5410",
              url: "https://www.youtube.com/watch?v=Z4yiNULnUfo",
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
            area: "ジャングル(夜) Lv2",
            pose: "変動(800)",
            position: "嘴の根本",
            friend: [""],
            others: "ツツケラ、レパルダス、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5091",
              url: "https://www.youtube.com/watch?v=BEsS58xPcV4",
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
            area: "ジャングル(夜) Lv1",
            pose: "変動(800)",
            position: "頭と頭の間",
            friend: ["ネマシュ"],
            others: "",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5542",
              url: "https://www.youtube.com/watch?v=_AZH4uLah1k",
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
            area: "ジャングル(夜) Lv2",
            pose: "固定(500)",
            position: "頭と胴の間",
            friend: ["ドデカバシ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5051",
              url: "https://www.youtube.com/watch?v=GeKI_KBNpgM",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };