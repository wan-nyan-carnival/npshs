const no = 6;

export default {
    id: "pidgeot",
    name: "ピジョット",
    en: "Pidgeot",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "キャタピー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5404",
              url: "https://www.youtube.com/watch?v=IzwYU52dDAU",
            },
          ],
          steps: [
            { type: "text", content: "分岐へと進み、タマゲタケたちが木の実を置いたあたりで、タマゲタケの上に乗っているタマゲタケにオーブを当てる。するとピジョットがフラワー付近に降りてくる。" },
            { type: "text", content: "着地し、羽を閉じたところを撮影。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2a.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "スワンナ、ビッパ、ドダイトス",
          },
          videos: [
            {
              name: "Quentin",
              score: "5427",
              url: "https://www.youtube.com/watch?v=31Q87y6ZXg0",
            },
          ],
          steps: [
            { type: "text", content: "ビッパの巣の前にピジョットを誘導し、姿勢を低くするランダムモーションを行ったところを撮影する。" },
            { type: "text", content: "ネオワン号に気づかれると逃げられてしまうため、ピジョットを誘導する時は左に寄せておく。" },
            { type: "text", content: "イルミナ状態のスワンナ2匹が着水した時にメロディを使用するとスワンナたちが飛び立ち、コイキングにオーブを当てると跳ねさせることができる。これらで他のポケモン点の増加を狙える。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke2b.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "キャタピー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5376",
              url: "https://www.youtube.com/watch?v=ENBDqfJV4LU",
            },
          ],
          steps: [
            { type: "text", content: "分岐へと進み、タマゲタケたちが木の実を置いたあたりで、タマゲタケの上に乗っているタマゲタケにオーブを当てる。するとピジョットがフラワー付近に降りてくる。" },
            { type: "text", content: "姿勢を低くするランダムモーションを撮影する。" },
          ]
        },
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(800)",
            position: "首と首の間",
            friend: ["ヤミカラス"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5555",
              url: "https://www.youtube.com/watch?v=-tg5QtqDeow",
            },
          ],
          steps: [
            { type: "text", content: "カイロスの前にいるヤミカラス2匹にオーブを当てると、ヤミカラスたちがピジョットの元へ向かう。" },
            { type: "text", content: "ピジョットが羽を広げているところを撮る。ヤミカラスたちが鳴いていると他のポケモン点が高くなりやすい。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ニンフィア、ミツハニー、サルノリ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5433",
              url: "https://www.youtube.com/watch?v=o7UlLnYXfWQ",
            },
          ],
          steps: [
            { type: "text", content: "開始直後、バッフロンたちのところに降りてくるピジョットにリンゴを与える。" },
            { type: "text", content: "ビッパの巣の手前あたりで左側に降りてくるピジョットにもリンゴを与える。食べきる前に進みすぎると途中で飛び立ってしまうので注意。" },
            { type: "text", content: "眠っているサルノリにサーチ、ニンフィアにオーブを使用し、それぞれ起こす。" },
            { type: "text", content: "ネオワン号を左に寄せておき、茂みの中に隠れているニンフィアにリンゴを投げて飛び出させたら誘導。サルノリも誘導。" },
            { type: "text", content: "ピジョットがポーズを取っているところを撮影。ズームアウトしながら撮影することでフラワー2つを写真に収めることができる。" },
            { type: "text", content: "ポーズ1000点より向きを優先した方がスコアが10点程度高くなる。" },
          ]
        }
      ],
    }
  };