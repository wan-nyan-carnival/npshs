const no = 7;

export default {
    id: "tangrowth",
    name: "モジャンボ",
    en: "Tangrowth",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "スワンナ、コアルヒー、ビッパ",
          },
          videos: [
            {
              name: "",
              score: "",
              url: "",
            },
          ],
          steps: [
            { type: "text", content: "最初にビッパを使って永続ブレーキをかける必要がある。詳細はURLを参照。\nhttps://www.youtube.com/watch?v=s81yU3yObr8" },
            { type: "text", content: "木の実にリンゴを投げることで、モジャンボが木の実を食べ、その後に待機状態となる。湖内までリンゴを使って誘導。誘導ルートの詳細はURLを参照。\nhttps://www.youtube.com/watch?v=jOCvcNTpXyk" },
            { type: "text", content: "モジャンボを維持しながら、湖のスワンナやコアルヒーを集める。またビッパの巣の頂点にリンゴを投げることでビッパが顔を出す。これらで他のポケモン点が増加。" },
            { type: "text", content: "モジャンボにサーチを使った時のモーションを撮影。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ピジョット、コイキング、スワンナ、コアルヒー、ビッパ",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5388",
              url: "https://www.youtube.com/watch?v=VP4k2LAMApA",
            },
          ],
          steps: [
            { type: "text", content: "ピジョットとコイキングのイベント手順は、中盤でスバメの元に降りてくるピジョットにリンゴをぶつけ、ピジョットが木の上に留まってからコイキングにリンゴをぶつけることで発生する。" },
            { type: "text", content: "木の実にリンゴを投げることで、モジャンボが木の実を食べ、その後に待機状態となる。ビッパの巣の前までリンゴを使って誘導。" },
            { type: "text", content: "ビッパの巣の頂点にリンゴをぶつけることで、ビッパが頭を出す。他のポケモン点の増加。" },
            { type: "text", content: "モジャンボにサーチを使った時のモーションを撮影。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1c.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ビークイン、ミツハニー、タマゲタケ、ビビヨン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5466",
              url: "https://www.youtube.com/watch?v=udBW5B4VyEw",
            },
          ],
          steps: [
            { type: "text", content: "終盤の花畑エリアにいるモジャンボにリンゴをぶつけて起こす。" },
            { type: "text", content: "入口近くにあるフラワーに誘導してから、自身の方に向かうように誘導していく。" },
            { type: "text", content: "眠っているイーブイにリンゴをぶつけるとモジャンボがこちらに向く。" },
            { type: "text", content: "モジャンボにサーチを使った時のモーションを撮影。" },
          ]
        },
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "コイキング、ピジョット、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5463",
              url: "https://www.youtube.com/watch?v=iXqnVk5zOKg",
            },
          ],
          steps: [
            { type: "text", content: "ピジョットとコイキングのイベント手順は、中盤でスバメの元に降りてくるピジョットにリンゴをぶつけ、ピジョットが木の上に留まってからコイキングにリンゴをぶつけることで発生する。" },
            { type: "text", content: "木の実にリンゴを投げることで、モジャンボが木の実を食べ、その後に待機状態となる。ビッパの巣の前までリンゴを使って誘導。" },
            { type: "text", content: "ビッパの巣の頂点にリンゴをぶつけることで、ビッパが頭を出す。他のポケモン点の増加。" },
            { type: "text", content: "モジャンボがリンゴを食べているところ撮影。ポーズ1000点はリンゴが口に入った瞬間。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ビークイン、ミツハニー、イーブイ、ピカチュウ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5230",
              url: "https://www.youtube.com/watch?v=vHWQqOAFlok",
            },
          ],
          steps: [
            { type: "text", content: "モジャンボにリンゴをぶつけて起こし、ジャンプしているところを撮影。位置点と風景点を優先するため、早めに撮影する。ポーズ点は903～907付近。" },
            { type: "text", content: "ビークインを誘導しておくと他のポケモン点が増加。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴(※)",
            friend: [""],
            others: "ヤミカラス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4486",
              url: "https://www.youtube.com/watch?v=UfwSsD3A358",
            },
          ],
          steps: [
            { type: "text", content: "寝ているモジャンボにオーブを当てて撮影。" },
            { type: "text", content: "※高速で動いているため、本来の位置点が1Fぶんズレているので注意。" },
          ]
        }
      ],
    }
  };