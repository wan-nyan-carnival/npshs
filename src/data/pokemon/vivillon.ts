const no = 1;

export default {
    id: "vivillon",
    name: "ビビヨン",
    en: "Vivillon",
    no,
    groups: ["公園", "キャンプ", "ジャングル", "砂漠", "ビーチ", "海上", "樹海", "火山", "雪原", "洞窟", "遺跡", "抜け道", "リバー", "荒野", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "サルノリ、ヒバニー、フラージェス、キュワワー、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5435",
              url: "https://www.youtube.com/watch?v=OsmVx1Jvd6E",
            },
            {
              name: "Quentin",
              score: "5276",
              url: "https://www.youtube.com/watch?v=OxzjlmEFnRI",
            },
          ],
          steps: [
            { type: "text", content: "〇〇を選ぶ" },
//            { type: "image", src: "/img/step1.png", alt: "〇〇の場所" },
            { type: "text", content: "カメラを構える" },
            { type: "text", content: "タイミングで撮影" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "リーフィア、メッソン、ミュウ、コイキング、アゲハント",
          },
          videos: [
            {
              name: "Quentin",
              score: "5411",
              url: "https://www.youtube.com/watch?v=iun_koS6XKE",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2a.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ピカチュウ、イーブイ、コイキング、ビークイン、ミツハニー、タマゲタケ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5303",
              url: "https://www.youtube.com/watch?v=_UWY2BD3YDw",
            },
            {
              name: "黒歌鳥",
              score: "5284",
              url: "https://www.youtube.com/watch?v=fRN8VtYxmFo",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke2b.png`,
          info: {
            area: "リバー(夜) Lv2",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ウパー、ヌオー、ラグラージ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5238",
              url: "https://www.youtube.com/watch?v=QCyT_mRv-Oo",
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
            area: "荒野(夜) Lv2",
            pose: "固定(500)",
            position: "頭",
            friend: [""],
            others: "ゼラオラ、バンギラス、ビビヨン、グライオン、イワパレス",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4901",
              url: "https://www.youtube.com/watch?v=A1_jEcjeao8",
            },
            {
              name: "Quentin",
              score: "4890",
              url: "https://www.youtube.com/watch?v=DnQnn-RDm-c",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke3b.png`,
          info: {
            area: "海上(夕) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "4882",
              url: "https://www.youtube.com/watch?v=GSlOKudJbe0",
            },
            {
              name: "Quentin",
              score: "4882",
              url: "https://www.youtube.com/watch?v=GwgMH_1eXxA",
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
            area: "キャンプ(入口)",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ウソッキー、ピカチュウ、ヤブクロン、コラッタ、デデンネ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5157",
              url: "https://www.youtube.com/watch?v=00y-JdIuj0c",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke4b.png`,
          info: {
            area: "ジャングル(昼) Lv2",
            pose: "固定(500)",
            position: "頭と頭の中間",
            friend: ["ビビヨン"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "5125",
              url: "https://www.youtube.com/watch?v=1SGdnavI-28",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };