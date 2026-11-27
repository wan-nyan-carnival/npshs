const no = 17;

export default {
    id: "bidoof",
    name: "ビッパ",
    en: "Bidoof",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv2",
            pose: "変動(800)",
            position: "頭と頭の間",
            friend: ["ビッパ"],
            others: "ピチュー、サルノリ",
          },
          videos: [
            {
              name: "tripledubz",
              score: "5447",
              url: "https://www.twitch.tv/videos/2712615778",
            },
            {
              name: "Quentin",
              score: "5420",
              url: "https://www.youtube.com/watch?v=HvHSuk9KB0s",
            },
          ],
          steps: [
            { type: "text", content: "ピチューとサルノリを橋の手前のビッパの移動先に誘導。" },
            { type: "text", content: "2匹いるビッパのうち1匹は後ろ足で立って周囲を見回しており、もう1匹は歩いて近づいてくる。歩いてきた方が立ち止まったところでリンゴをぶつけ、後ろにいる個体がこちらを向いたタイミングで撮影。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "公園(昼) Lv2",
            pose: "固定(950)",
            position: "頭",
            friend: ["ビッパ"],
            others: "ビッパ",
          },
          videos: [
            {
              name: "Nicole",
              score: "5319",
              url: "https://youtu.be/w2rpD9FRaec",
            },
          ],
          steps: [
            { type: "text", content: "ビッパの巣の前に誘導し、後ろ足で立つランダムモーションを取ったところを撮影。" },
          ]
        },
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["ビッパ"],
            others: "スバメ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5543",
              url: "https://www.youtube.com/watch?v=ZTxFI5iyyPA",
            },
          ],
          steps: [
            { type: "text", content: "分岐を選択し、ビッパの巣方面の道へ進む。後ろをついてくるビッパにオーブを当て、ダム橋から出たところでもう一度オーブを当てるとビッパが体を震わせる。すると3匹のビッパがついてくるようになる。" },
            { type: "text", content: "カーブになっているところまで待ち、ビッパたちを撮影しやすい角度にする。ここでリンゴを投げて、左後ろと一番前のビッパ両方に当てる。一番前のビッパにリンゴが当たった瞬間に撮影。" },
            { type: "text", content: "写真には一番前のビッパと左後ろのビッパのみが収まるようにする。3匹目のビッパが写りこむと★3判定となる。" },
            { type: "text", content: "スバメを誘導して写真に収めることも可能。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["ビッパ"],
            others: "スバメ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5612",
              url: "https://www.youtube.com/watch?v=P4pPwPitrsQ",
            },
          ],
          steps: [
            { type: "text", content: "分岐を選択し、ビッパの巣方面の道へ進む。後ろをついてくるビッパにオーブを当て、ダム橋から出たところでもう一度オーブを当てるとビッパが体を震わせる。すると3匹のビッパがついてくるようになる。" },
            { type: "text", content: "カーブになっているところまで待ち、ビッパたちを撮影しやすい角度にする。ここでリンゴを投げて、左後ろと一番前のビッパ両方に当てる。一番前のビッパにリンゴが当たった瞬間に撮影。" },
            { type: "text", content: "写真には3匹全部のビッパが綺麗に収まるように撮影する。2匹しか写せないと★2判定となる。" },
            { type: "text", content: "スバメを誘導して写真に収めることも可能。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "頭と頭の間",
            friend: ["ビッパ"],
            others: "スバメ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5302",
              url: "https://www.youtube.com/watch?v=O_bdh0GsHPk",
            },
          ],
          steps: [
            { type: "text", content: "分岐を選択し、ビッパの巣方面の道へ進む。後ろをついてくるビッパにオーブを当て、ダム橋から出たところでもう一度オーブを当てるとビッパが体を震わせる。すると3匹のビッパがついてくるようになる。" },
            { type: "text", content: "カーブになっているところまで待ち、ビッパたちを撮影しやすい角度にする。後ろのビッパにリンゴをぶつけることで他のポケモン点が増加。" },
            { type: "text", content: "★3の写真との違いは、主役にリンゴをぶつけていない点。" },
            { type: "text", content: "スバメを誘導して写真に収めることも可能。" },
          ]
        }
      ],
    }
  };