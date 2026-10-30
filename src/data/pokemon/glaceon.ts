const no = 181;

export default {
    id: "glaceon",
    name: "グレイシア",
    en: "Glaceon",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ユキノオー、タマザラシ、ポッチャマ、ロコン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5739",
              url: "https://www.youtube.com/watch?v=UGVUBiqOJyk",
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
            area: "雪原(夜) Lv2",
            pose: "変動(550)",
            position: "頭",
            friend: [""],
            others: "ユキノオー、タマザラシ、ポッチャマ、ロコン、モスノウ、ウリムー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5278",
              url: "https://www.youtube.com/watch?v=rnqky55xufs",
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
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ユキノオー、タマザラシ、ポッチャマ、ロコン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5472",
              url: "https://www.youtube.com/watch?v=pOeZw5UOp04",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4a.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "首と胴の間",
            friend: ["ポッチャマ"],
            others: "ロコン、モスノウ、デリバード",
          },
          videos: [
            {
              name: "Quentin",
              score: "5706",
              url: "https://www.youtube.com/watch?v=Vd9RIZDuBUk",
            },
          ],
          steps: [
            { type: "text", content: "最初の雪原の右方、分岐後の木の上、洞窟の最初の方にいるモスノウにリンゴをぶつけると、最終エリアにモスノウが出現して他のポケモン点が加点。" },
            { type: "text", content: "分岐を選択したらターボ開始。ケケンカニでブレーキがかかったタイミングで、高所にいるグレイシアにオーブを当てる。（ケケンカニが通り過ぎた後に行うと安全）" },
            { type: "text", content: "少し遅らせてから木を叩くケケンカニにオーブを当て、サーチで分岐イベントで出現させたら下キーで後ろを向き、ユキメノコの写真を撮影。これにより分岐イベントを保存するバグが発生。" },
            { type: "text", content: "タマザラシにリンゴを当て、移動の邪魔になるユキノオーにもリンゴを当てて足止め。" },
            { type: "text", content: "ゴール直前に分岐イベントを成立させ、同時に下キーで視点変更。これにより分岐成立後の位置調整がバグり、本来であれば進めない位置へ移動できる。タイミングが早いと左に寄ってしまうので注意。" },
            { type: "text", content: "グレイシアがダイヤモンドダストを開始し、尻尾が上に真っ直ぐピンと立ったあたりで撮影するとポーズ1000点。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke4b.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と頭の間",
            friend: ["ポッチャマ"],
            others: "ロコン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5469",
              url: "https://www.youtube.com/watch?v=0IwvTe3Y9AY",
            },
          ],
          steps: [
            { type: "text", content: "分岐を選択後、高所にいるグレイシアにオーブを当ててイベントのフラグを成立させる。" },
            { type: "text", content: "タマザラシにリンゴを当ててイベントを起動。" },
            { type: "text", content: "グレイシアがダイヤモンドダストを開始し、尻尾が上に真っ直ぐピンと立ったあたりで撮影するとポーズ1000点。" },
          ]
        }
      ],
    }
  };