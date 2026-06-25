const no = 55;

export default {
    id: "quagsire",
    name: "ヌオー",
    en: "Quagsire",
    no,
    groups: ["ジャングル", "リバー", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ヌオー、メガヤンマ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5118",
              url: "https://www.youtube.com/watch?v=BUUND1lJm-w",
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
            area: "リバー(夜) Lv2",
            pose: "変動(1000)",
            position: "頭と胴の間",
            friend: ["コダック"],
            others: "レディアン、ウパー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5482",
              url: "https://www.youtube.com/watch?v=BlNlaMyJYcQ",
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
            area: "リバー(夜) Lv2",
            pose: "変動(800)",
            position: "頭と胴の間",
            friend: ["ウパー"],
            others: "ビビヨン",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5797",
              url: "https://www.youtube.com/watch?v=lLwMJRscXic",
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
            position: "頭と首の間",
            friend: ["ヌオー"],
            others: "ウパー、メガヤンマ、アーボック、アゲハント、エイパム、フシギバナ、ミュウ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5899",
              url: "https://www.youtube.com/watch?v=wfPx32MaZd8",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };