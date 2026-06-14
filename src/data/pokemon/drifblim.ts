const no = 83;

export default {
    id: "drifblim",
    name: "フワライド",
    en: "Drifblim",
    no,
    groups: ["ビーチ", "海上", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "海上(夕) Lv2",
            pose: "変動(800)",
            position: "胴",
            friend: [""],
            others: "フワライド、シャワーズ、パールル、ヒドイデ、ホエルオー、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5279",
              url: "https://www.youtube.com/watch?v=9iQlGhuxvCo",
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
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "フワライド、ホエルオー",
          },
          videos: [
            {
              name: "tripledubz",
              score: "5228",
              url: "https://www.twitch.tv/videos/2760550388",
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
            area: "海上(夕) Lv2",
            pose: "変動(800)",
            position: "顔",
            friend: ["パールル"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5171",
              url: "https://www.youtube.com/watch?v=JFIWefrBdrg",
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
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4678",
              url: "https://www.youtube.com/watch?v=iiRffp4CCr0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };