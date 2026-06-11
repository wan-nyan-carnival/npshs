const no = 45;

export default {
    id: "arbok",
    name: "アーボック",
    en: "Arbok",
    no,
    groups: ["ジャングル", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "レディアン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5352",
              url: "https://www.youtube.com/watch?v=HlYc7D29tOU",
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
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "レディアン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5477",
              url: "https://www.youtube.com/watch?v=iHoxKZSrNeo",
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
            area: "リバー(昼) Lv3",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["コダック"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5414",
              url: "https://www.youtube.com/watch?v=Kt6-S7iQEgE",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["フシギバナ"],
            others: "ミュウ、アゲハント",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5657",
              url: "https://www.youtube.com/watch?v=7JACLhXGhxM",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };