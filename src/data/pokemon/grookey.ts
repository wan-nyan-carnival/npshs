const no = 3;

export default {
    id: "grookey",
    name: "サルノリ",
    en: "Grookey",
    no,
    groups: ["公園", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv1",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ピチュー、ビッパ、エモンガ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5380",
              url: "https://www.youtube.com/watch?v=46FAtL5IAqs",
            },
          ],
          steps: [
            { type: "text", content: "調査レベル1である点に注意。ドードリオに追い払われたり、サルノリが起きなかったりで成立しない。" },
            { type: "text", content: "焼けたリンゴ付近にリンゴを置くことでエモンガを呼び出し、その個体でブレーキをかけている間にフラワーを点灯してオーブ状態のエモンガを呼び出す。この個体はビッパの巣付近まで連れていけるので他のポケモン点を増やせる。詳細はエモンガページの動画を参照。" },
            { type: "text", content: "左側にいるピチューとサルノリを右側のビッパの巣を写せる位置までリンゴで誘導し、サルノリのランダムモーションであるあくびをしているところ撮影する。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv2",
            pose: "変動(800)",
            position: "頭",
            friend: ["シェイミ"],
            others: "ピチュー、キュワワー",
          },
          videos: [
            {
              name: "Quentin",
              score: "5601",
              url: "https://www.youtube.com/watch?v=IBC4wzTxE6c",
            },
          ],
          steps: [
            { type: "text", content: "花畑エリアに入ってすぐの右方にあるフラワーを点灯することでキュワワーが集まり、リンゴで誘導できるようになる。またフラージェス付近のフラワーを点灯するとシェイミが合流。これらで他のポケモン点を増やせる。" },
            { type: "text", content: "サルノリとピチューが左のフラワー付近でぶつかったところを撮影する。本来であれば★4構図だが、ピチューを大きく写さないことで★2構図に下げることができる。" },
            { type: "text", content: "ピチューとの合流前にポーズバッファをしていると、サルノリの向きが悪化してしまうケースがあるので注意。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend:["シェイミ"],
            others: "ピチュー、キュワワー、フラージェス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5825",
              url: "https://www.youtube.com/watch?v=_OkJpSrxIQs",
            },
          ],
          steps: [
            { type: "text", content: "終盤の花畑エリアに入った直後、右方にあるフラワーを点灯することでキュワワーが集まり、リンゴで誘導できるようになる。これらを撮影地点まで連れていくことで他のポケモン点が増加" },
            { type: "text", content: "左側、ヒバニーとサルノリがいる場所の近くに茂みがあり（サーチすると？？？と表示される）、この茂みにリンゴもしくはオーブを投げ入れることでピチューが飛び出し、コースの最後にあるフラワーに向けて走り出すイベントが発生。" },
            { type: "text", content: "フラージェス付近のフラワーを点灯させると、シェイミがピチューたちの場所に合流する。" },
            { type: "text", content: "サルノリがバック宙し、着地した後の動作を撮影する。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(800)",
            position: "頭と頭の中間",
            friend: ["ピチュー"],
            others: "シェイミ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5448",
              url: "https://www.youtube.com/watch?v=KDxguKyLUik",
            },
          ],
          steps: [
            { type: "text", content: "花畑エリアに入ってすぐの右方にあるフラワーを点灯することでキュワワーが集まり、リンゴで誘導できるようになる。またフラージェス付近のフラワーを点灯するとシェイミが合流。これらで他のポケモン点を増やせる。" },
            { type: "text", content: "サルノリとピチューが左のフラワー付近でぶつかったところを撮影する。ピチューを大きく写さないと★2構図に下がる。" },
            { type: "text", content: "ピチューとの合流前にポーズバッファをしていると、サルノリの向きが悪化してしまうケースがあるので注意。" },
          ]
        }
      ],
    }
  };