const no = 153;

export default {
    id: "ho-oh",
    name: "ホウオウ",
    en: "Ho-Oh",
    no,
    groups: ["火山", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "火山 Lv3",
            pose: "変動(2000)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "André",
              score: "6000",
              url: "https://www.youtube.com/watch?v=_fYgahitKIE",
            },
            {
              name: "Whom Snaps",
              score: "6000",
              url: "https://www.youtube.com/watch?v=0g-YNuN3UvM",
            },
          ],
          steps: [
            { type: "text", content: "序盤に出現するホウオウを撮影することで、コース上にホウオウの羽根が出現するようになる。ホウオウが出現する場所は、開幕モウカザルがいる右側・坂を下った後の左後方・坂を下った後のフラワーがある右方のどれか。" },
            { type: "text", content: "3箇所にあるホウオウの羽根にオーブを当てる。羽根の場所は、分岐後の通路の左方（ヒトカゲ・ゴローンの反対側）、青部屋の右側にいるコータスの下（コータスにオーブを当ててどかしたら再度オーブを投げる）、青部屋の左側にある柱の根本。" },
            { type: "text", content: "ホウオウが出現する直前あたりからポーズバッファを繰り返すことで、ホウオウの向きと距離感が変化するバグが発生する。これを用いると大きさ2000点がとれる。" },
            { type: "text", content: "飛び上がってから旋回を始め、後ろを向いたあたりからオーブを2回当てる。これによりホウオウの挙動が変化し、着地するようになる。" },
            { type: "text", content: "ターボで位置を調整し、着地間際を撮影する。ホウオウの翼が平行になったタイミングがポーズ1000点。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "火山 Lv3",
            pose: "変動(2000)",
            position: "頭",
            friend: [""],
            others: "ゴローン",
          },
          videos: [
            {
              name: "Dmo_1123",
              score: "6218",
              url: "https://www.youtube.com/watch?v=FDLd1P_SQ5g",
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
            area: "火山 Lv3",
            pose: "変動(2000)",
            position: "胴",
            friend: [""],
            others: "ブースター",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "6117",
              url: "https://www.youtube.com/watch?v=Y7xj8_nOats",
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
            area: "火山 Lv3",
            pose: "変動(2000)",
            position: "首と頭の間",
            friend: ["ブースター"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6432",
              url: "https://www.youtube.com/watch?v=ckayDk3odMQ",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };