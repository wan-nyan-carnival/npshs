const no = 158;

export default {
    id: "mightyena",
    name: "グラエナ",
    en: "Mightyena",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "固定(500)",
            position: "首",
            friend: ["グラエナ"],
            others: "サンドパン",
          },
          videos: [
            {
              name: "かける",
              score: "5330",
              url: "https://www.youtube.com/watch?v=ZscS6dpJPPc",
            },
            {
              name: "Pokemario6456",
              score: "5294",
              url: "https://www.youtube.com/watch?v=1DemPWozD7k",
            },
          ],
          steps: [
            { type: "text", content: "右側の倒木のそばにいるグラエナにリンゴをぶつけ、メロディを聞かせて群れに合流させる。" },
            { type: "text", content: "続けて左側にいるグラエナにメロディを聞かせ、こちらも群れに合流させる。" },
            { type: "text", content: "坂を上り終えたらターボを押しっぱにして左キーを押し、そのまま5秒程度進む。" },
            { type: "text", content: "ある程度進んだタイミングで下キーを押して振り向いたら、割れ目付近でターボを解除し、ズームしてフラワーを点灯させる。（右ルージュラの顔あたりを狙う）" },
            { type: "text", content: "再び下キーで後ろを向いたらターボを再開。ブレーキがかかるので、その後にズームとターボで位置調整。オオタチを追いかけていたグラエナが、飛び出してきたサンドパンによって止められるので、そこで走るのをやめる寸前のグラエナを撮影する。" },
            { type: "text", content: "完全に止まってしまうと★2判定になってしまうので注意。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "グラエナ、ウォーグル、ユキワラシ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5460",
              url: "https://www.youtube.com/watch?v=jytEaSt-cEo",
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
            area: "雪原(夜) Lv1",
            pose: "固定(750)",
            position: "頭",
            friend: ["グラエナ"],
            others: "ウォーグル",
          },
          videos: [
            {
              name: "Quentin",
              score: "5551",
              url: "https://www.youtube.com/watch?v=K0qdnTyUQzY",
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
            area: "雪原(昼) Lv3",
            pose: "変動(800)",
            position: "胴",
            friend: ["グラエナ"],
            others: "ツンベアー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5694",
              url: "https://www.youtube.com/watch?v=mHMTpq9erbI",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };