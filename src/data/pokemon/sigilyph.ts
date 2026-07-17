const no = 208;

export default {
    id: "sigilyph",
    name: "シンボラー",
    en: "Sigilyph",
    no,
    groups: ["遺跡", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "遺跡 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "オーベム、ブラッキー、ゴルーグ、ワタシラガ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5218",
              url: "https://www.youtube.com/watch?v=5iJS4c7vxno",
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
            area: "遺跡 Lv3",
            pose: "固定(950)",
            position: "首",
            friend: [""],
            others: "オーベム、ゴルーグ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5204",
              url: "https://www.youtube.com/watch?v=iFDLPjOefhI",
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
            area: "遺跡 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["シンボラー"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5738",
              url: "https://www.youtube.com/watch?v=rBpwPv4SlXM",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4a.png`,
          info: {
            area: "遺跡 Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["シンボラー"],
            others: "シャンデラ、オーベム、ゴルーグ、ワタシラガ",
          },
          videos: [
            {
              name: "tripledubz",
              score: "6043",
              url: "https://www.twitch.tv/videos/2820057889",
            },
            {
              name: "Quentin",
              score: "5828",
              url: "https://www.youtube.com/watch?v=fJzE58fkfvg",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke4b.png`,
          info: {
            area: "遺跡 Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["シンボラー"],
            others: "ネイティ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5631",
              url: "https://www.youtube.com/watch?v=KabiDTPWnkc",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };