const no = 3;

export default {
    id: "grookey",
    name: "サルノリ",
    no,
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv1",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ピチュー、ビッパ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5380",
              url: "https://www.youtube.com/watch?v=46FAtL5IAqs",
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
            area: "公園(昼) Lv2",
            pose: "変動(800)",
            position: "頭",
            friend: ["シェイミ"],
            others: "ピチュー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5601",
              url: "https://www.youtube.com/watch?v=IBC4wzTxE6c",
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
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend:["シェイミ"],
            others: "ピチュー、キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5825",
              url: "https://www.youtube.com/watch?v=_OkJpSrxIQs",
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
            pose: "変動(800)",
            position: "頭と頭の中間",
            friend: ["ピチュー"],
            others: "シェイミ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5448",
              url: "https://www.youtube.com/watch?v=KDxguKyLUik",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };