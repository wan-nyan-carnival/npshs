const no = 10;

export default {
    id: "murkrow",
    name: "ヤミカラス",
    en: "Murkrow",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "固定(500)",
            position: "頭",
            friend: ["ヤミカラス"],
            others: "モジャンボ、スワンナ、コアルヒー、バッフロン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5312",
              url: "https://www.youtube.com/watch?v=T1b44dsHZoQ",
            },
          ],
          steps: [
            { type: "text", content: "コースをある程度進むとヤミカラスたちが飛び立つので、ターボを使いながら振り返って撮影する。ヤミカラスはランダムな方向に飛び立つので運ゲー。事前にリンゴで位置を調整しておくことは可能。" },
            { type: "text", content: "モジャンボにリンゴをぶつけて移動させ、スワンナにオーブを当てて足止めすることで他のポケモン点を稼げる。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["ヤミカラス"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5663",
              url: "https://www.youtube.com/watch?v=HiM13mcPHSU",
            },
          ],
          steps: [
            { type: "text", content: "丘に差し掛かるあたりでヤミカラスが飛び立つので、振り向いてリンゴをぶつけて撮影する。2匹ともに当たれば他のポケモン点が増加する。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["ヤミカラス"],
            others: "ビークイン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5737",
              url: "https://www.youtube.com/watch?v=mheHGUSPaBQ",
            },
          ],
          steps: [
            { type: "text", content: "カイロスの前にいるヤミカラス2匹にオーブを当てると、ヤミカラスたちがピジョットの元へ向かう。" },
            { type: "text", content: "ヤミカラスが鳴き声を上げているところを撮影。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(夜) Lv2",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "キャタピー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5019",
              url: "https://www.youtube.com/watch?v=ltS5uXog2o8",
            },
          ],
          steps: [
            { type: "text", content: "最初の橋を渡った後、青い草付近にヤミカラスが降りてくるので、リンゴを食べているところを撮影。" },
            { type: "text", content: "キャタピーを入れることで他のポケモン点が増加。" },
          ]
        }
      ],
    }
  };