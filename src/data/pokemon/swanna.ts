const no = 16;

export default {
    id: "swanna",
    name: "スワンナ",
    en: "Swanna",
    no,
    groups: ["公園", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "胴と頭の間",
            friend: ["スワンナ"],
            others: "ビッパ、コアルヒー",
          },
          videos: [
            {
              name: "",
              score: "",
              url: "",
            },
          ],
          steps: [
            { type: "text", content: "焼けたリンゴのあたりにリンゴを投げ、エモンガを木から降ろす。そのままリンゴで誘導し、丘の上までつれていく。" },
            { type: "text", content: "丘の頂点付近に到達したあたりでピジョットが出現。この頃から空を飛ぶスワンナの周回が始まり、正面から撮影するには低空を飛行する3周目まで手前に留まる必要がある。" },
            { type: "text", content: "つれてきたエモンガがリンゴを焼いているうちに衝突してブレーキ→次のリンゴを投げる→食べ始める前にサーチをかけて衝突してブレーキ、というループを繰り返して時間を稼ぐ。5回程度ブレーキをかければ足りる。" },
            { type: "text", content: "さらなる加点を狙うなら、ブレーキ中にビッパの巣の頂点にリンゴをぶつけてビッパの顔を出させたり、湖のスワンナにリンゴを食べさせ、食後に喜んでいるポーズ（※）をとらせるなどする。\n※ポーズ点は前半450・後半750程度。前半であっても翼を広げるので大きさ点を稼げる。" },
            { type: "text", content: "低空で飛行してきたスワンナを1段階ズームアウトで撮影し、他のポケモンや背景をしっかり写す。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "目",
            friend: [""],
            others: "スワンナ、コアルヒー、ビッパ、モジャンボ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5372",
              url: "https://www.youtube.com/watch?v=ffK9V5Cr3GU",
            },
            {
              name: "Quentin",
              score: "",
              url: "https://www.youtube.com/watch?v=aJ6p_7Nmvls",
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
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "首",
            friend: ["コアルヒー"],
            others: "ピチュー、サルノリ、ドダイトス、ニンフィア",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5640",
              url: "https://www.youtube.com/watch?v=GUMaZL9sUTo",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "スワンナ、コアルヒー、ビッパ、モジャンボ",
          },
          videos: [
            {
              name: "Quentin",
              score: "",
              url: "https://www.youtube.com/watch?v=aJ6p_7Nmvls",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "首と頭の間",
            friend: ["コアルヒー"],
            others: "ドダイトス、ピチュー、サルノリ、ニンフィア",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5620",
              url: "https://www.youtube.com/watch?v=B5c5k15dMbw",
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
            area: "公園(夜) Lv2",
            pose: "変動(800)",
            position: "目",
            friend: [""],
            others: "スワンナ、コイキング",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4999",
              url: "https://www.youtube.com/watch?v=qrWYUGvvnps",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };