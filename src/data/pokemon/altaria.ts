const no = 138;

export default {
    id: "altaria",
    name: "チルタリス",
    en: "Altaria",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "アーケウス、ゴローン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5327",
              url: "https://www.youtube.com/watch?v=25GCzyLzpa8",
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
            area: "火山 Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "アーケウス、ゴローン",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5333",
              url: "https://www.youtube.com/watch?v=qg6Kbx7uduI",
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
            area: "火山 Lv2",
            pose: "変動(800)",
            position: "胴と首の間",
            friend: ["チルタリス"],
            others: "",
          },
          videos: [
            {
              name: "jbhmax",
              score: "5458",
              url: "https://www.twitch.tv/videos/2800777380",
            },
            {
              name: "黒歌鳥",
              score: "5446",
              url: "https://www.youtube.com/watch?v=U6lhTNx8qm8",
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
            area: "火山 Lv3",
            pose: "固定(950)",
            position: "胴と頭の間",
            friend: ["チルタリス"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5650",
              url: "https://www.youtube.com/watch?v=upwZps04YDg",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };