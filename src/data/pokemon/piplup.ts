const no = 176;

export default {
    id: "piplup",
    name: "ポッチャマ",
    en: "Piplup",
    no,
    groups: ["雪原", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "雪原(昼) Lv2",
            pose: "変動(1000)",
            position: "胴",
            friend: ["ポッチャマ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5649",
              url: "https://www.youtube.com/watch?v=b-vI7gXlASs",
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
            pose: "変動(800)",
            position: "頭",
            friend: ["ポッチャマ"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5534",
              url: "https://www.youtube.com/watch?v=tiCh2eHrOxk",
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
            area: "雪原(夜) Lv2",
            pose: "固定(500)",
            position: "頭と頭の間",
            friend: ["ポッチャマ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5160",
              url: "https://www.youtube.com/watch?v=3uK664aUyIU",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "雪原(昼) Lv3",
            pose: "変動(1000)",
            position: "頭(※)",
            friend: [""],
            others: "ポッチャマ",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5124",
              url: "https://www.youtube.com/watch?v=UDslqGOCxYs",
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
            position: "胴と首の間",
            friend: ["グレイシア"],
            others: "ロコン、モスノウ、デリバード",
          },
          videos: [
            {
              name: "Quentin",
              score: "6049",
              url: "https://www.youtube.com/watch?v=Vd9RIZDuBUk",
            },
          ],
          steps: [
            { type: "text", content: "最初の雪原の右方、分岐後の木の上、洞窟の最初の方にいるモスノウにリンゴをぶつけると、最終エリアにモスノウが出現して他のポケモン点が加点。" },
            { type: "text", content: "分岐を選択したらターボ開始。ケケンカニでブレーキがかかったタイミングで、高所にいるグレイシアにオーブを当てる。（ケケンカニが通り過ぎた後に行うと安全）" },
            { type: "text", content: "少し遅らせてから木を叩くケケンカニにオーブを当て、サーチで分岐イベントで出現させたら下キーで後ろを向き、ユキメノコの写真を撮影。これにより分岐イベントを保存するバグが発生。" },
            { type: "text", content: "タマザラシにリンゴを当て、移動の邪魔になるユキノオーにもリンゴを当てて足止め。" },
            { type: "text", content: "ゴール直前に分岐イベントを成立させ、同時に下キーで視点変更。これにより分岐成立後の位置調整がバグり、本来であれば進めない位置へ移動できる。タイミングが早いと左に寄ってしまうので注意。" },
            { type: "text", content: "グレイシアがダイヤモンドダストを開始し、尻尾が上に真っ直ぐピンと立ったあたりで撮影するとポーズ1000点。" },          ]
        },
        {
          image: `/npshs/img/${no}/poke4b.png`,
          info: {
            area: "雪原(夜) Lv2",
            pose: "変動(1000)",
            position: "頭と頭の間",
            friend: ["グレイシア"],
            others: "タマザラシ、ロコン、ユキメノコ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5211",
              url: "https://www.youtube.com/watch?v=-vbr1ZbVFpk",
            },
          ],
          steps: [
            { type: "text", content: "分岐を選択後、ケケンカニにオーブを当ててユキメノコを出現させ、高所にいるグレイシアにオーブを当ててイベントのフラグを成立させる。" },
            { type: "text", content: "ユキメノコを追いながら落ちてくるユキハミ3匹にリンゴを当て、ユキメノコを最終エリアまで誘導。" },
            { type: "text", content: "タマザラシにリンゴを当て、移動の邪魔になるユキノオーにもリンゴを当てて足止め。眠っているユキメノコにオーブを当てて起こす。" },
            { type: "text", content: "グレイシアがダイヤモンドダストを開始し、尻尾が上に真っ直ぐピンと立ったあたりで撮影するとポーズ1000点。" },           ]
        }
      ],
    }
  };