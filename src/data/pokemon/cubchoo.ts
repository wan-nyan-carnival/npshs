const no = 156;

export default {
    id: "cubchoo",
    name: "クマシュン",
    en: "Cubchoo",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "オオタチ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5044",
              url: "https://www.youtube.com/watch?v=96B6gfHbK8k",
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
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "オオタチ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5235",
              url: "https://www.youtube.com/watch?v=uUdjzH7DozA",
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
            area: "雪原(夜) Lv2",
            pose: "変動",
            position: "頭",
            friend: ["クマシュン"],
            others: "バイバニラ",
          },
          videos: [
            {
              name: "tripledubz",
              score: "4709",
              url: "https://www.twitch.tv/videos/2788318571",
            },
            {
              name: "かける",
              score: "4684",
              url: "https://www.youtube.com/watch?v=no-P593B2rU",
            },
          ],
          steps: [
            { type: "text", content: "最初の分岐と次の分岐をスキャンして進む。クマシュンが所定の位置につくまで少し時間がかかるので、ターボを控えめにして待つ。" },
            { type: "text", content: "目安を決めてリンゴを投げ、クマシュンを誘導し、途中バイバニラをサーチで起こす。クマシュンの移動状況を確認しながら残りのリンゴを投げて誘導していく。" },
            { type: "text", content: "誘導したクマシュンがリンゴを食べ始めると、もう1匹のクマシュンがぶつかりにくるので、ぶつかる直前に主役クマシュンにリンゴをぶつけて、衝突リアクションを遅らせる。" },
            { type: "text", content: "リンゴをぶつけられたリアクションが終わると、衝突リアクションを取り始めるので、そこを撮影。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "雪原(昼) Lv3",
            pose: "変動(1000)",
            position: "首",
            friend: ["ツンベアー"],
            others: "マニューラ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "4844",
              url: "https://www.youtube.com/watch?v=Z7XzkHyENv0",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };