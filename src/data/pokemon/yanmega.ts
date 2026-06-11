const no = 46;

export default {
    id: "yanmega",
    name: "メガヤンマ",
    en: "Yanmega",
    no,
    groups: ["ジャングル", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(夜) Lv1",
            pose: "変動(1000)",
            position: "腹",
            friend: [""],
            others: "メガヤンマ、ウパー、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5661",
              url: "https://www.youtube.com/watch?v=1LSG91vsrlI",
            },
            {
              name: "Quentin",
              score: "5614",
              url: "https://www.youtube.com/watch?v=9kYzVpGk6Sk",
            },
            {
              name: "Herpingyoshi",
              score: "5513",
              url: "https://www.youtube.com/watch?v=w9EGwGJSo1E",
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
            position: "頭",
            friend: [""],
            others: "ミュウ、アリアドス、ネマシュ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5573",
              url: "https://www.youtube.com/watch?v=FXqaa2uehwU",
            },
            {
              name: "Herpingyoshi",
              score: "5572",
              url: "https://www.youtube.com/watch?v=FXqaa2uehwU",
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
            position: "腹",
            friend: [""],
            others: "メガヤンマ、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5535",
              url: "https://www.youtube.com/watch?v=y0cT_ULkueA",
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
            area: "ジャングル(夜) Lv1",
            pose: "固定(500)",
            position: "腹と胸の間",
            friend: ["メガヤンマ"],
            others: "コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5779",
              url: "https://www.youtube.com/watch?v=fm3D1z2Zaco",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };