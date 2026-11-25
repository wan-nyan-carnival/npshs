const no = 9;

export default {
    id: "wurmple",
    name: "ケムッソ",
    en: "Wurmple",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "首と首の間",
            friend: ["ケムッソ"],
            others: "",
          },
          videos: [
            {
              name: "Milc",
              score: "",
              url: "https://www.youtube.com/watch?v=yzme8D8HMnQ",
            },
          ],
          steps: [
            { type: "text", content: "先頭のケムッソにリンゴをぶつけ、枝を登らせる必要がある。ドードリオやエモンガを使ってブレーキをかけよう。" },
            { type: "text", content: "2番目のケムッソにリンゴをぶつけ、ポーズ点を高めることで他のポケモン点を稼げる。" },
            { type: "text", content: "エモンガのリンゴを焼くモーションが枠内に入る可能性がある。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["ケムッソ"],
            others: "エモンガ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5815",
              url: "https://www.youtube.com/watch?v=rlJA0l8NN3o",
            },
          ],
          steps: [
            { type: "text", content: "先頭のケムッソにリンゴをぶつけ、枝を登らせる必要がある。ドードリオやエモンガを使ってブレーキをかけよう。" },
            { type: "text", content: "サーチを使用したところを撮影する。" },
            { type: "text", content: "エモンガのリンゴを焼くモーションが枠内に入る。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "抜け道(昼)",
            pose: "変動(800)",
            position: "首と首の間",
            friend: ["ケムッソ"],
            others: "キュワワー、ドダイトス",
          },
          videos: [
            {
              name: "Herpingyoshi",
              score: "5365",
              url: "https://www.youtube.com/watch?v=1u6SaCh_m2s",
            },
          ],
          steps: [
            { type: "text", content: "ドードリオが下りてきて驚く場面を撮影する。ケムッソには2種類のポーズがあり、ジャンプするか後ろ足で立つかのどちらか。手前のケムッソがジャンプし、後ろのケムッソが後ろ足で立つという組み合わせにすると、スコアが高くなる。" },
            { type: "text", content: "撮影の少し前にわずかに左に寄っておくといい。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "首と首の間",
            friend: ["スバメ"],
            others: "ケムッソ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5098",
              url: "https://www.youtube.com/watch?v=bnH-zNhiCPU",
            },
          ],
          steps: [
            { type: "text", content: "モジャンボがいる場所の手前にいる橋あたりで、背後に3匹のスバメが出現するので、それぞれを撮影。するとケムッソとスバメが戦うイベントが発生する。" },
            { type: "text", content: "ケムッソにオーブを当てて撮影。スバメが飛び立つ瞬間を狙い、奥のケムッソと飛び立つスバメの中間点を押さえる。" },
            { type: "text", content: "草むらの隙間にビッパの巣を置くことで風景点を獲得。" },
          ]
        }
      ],
    }
  };