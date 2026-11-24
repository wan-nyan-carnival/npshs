const no = 5;

export default {
    id: "bouffalant",
    name: "バッフロン",
    en: "Bouffalant",
    no,
    groups: ["公園", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1a.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ピチュー、サルノリ、バッフロン、ビビヨン",
          },
          videos: [
            {
              name: "Quentin",
              score: "5088",
              url: "https://www.youtube.com/watch?v=v7XSkgJHEH8",
            },
          ],
          steps: [
            { type: "text", content: "ピチューとサルノリを回り込むようにリンゴで誘導し、バッフロンの背後に移動させると他のポケモン点が増加。" },
            { type: "text", content: "開始地点付近にいる歩いているバッフロンが、蹄で地面をかくようなランダムモーションを行っているところを撮影する。" },
          ]
        },
        {
          image: `/npshs/img/${no}/poke1b.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "胴",
            friend: [""],
            others: "ピチュー、サルノリ、ビッパ、バッフロン、ビビヨン、ヒバニー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5075",
              url: "https://www.youtube.com/watch?v=xAZlBm9Hm0s",
            },
          ],
          steps: [
            { type: "text", content: "ピチューとサルノリを奥へ誘導し、ネオワン号を右へ寄せる。" },
            { type: "text", content: "左に出てくるビッパも合流させて誘導していく。" },
            { type: "text", content: "眠っているビッパの横にリンゴを置きつつ、ビッパにリンゴをぶつけて起こす。" },
            { type: "text", content: "眠っていたビッパに再度リンゴを当ててポーズを変更させつつ（他のポケモン点の増加）、眠っているバッフロンを撮影。" },
          ]
        },
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(500)",
            position: "首",
            friend: ["ビッパ"],
            others: "ピチュー、サルノリ、バッフロン、ビビヨン",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5170",
              url: "https://www.youtube.com/watch?v=qghMn-wM3qQ",
            },
          ],
          steps: [
            { type: "text", content: "ピチューとサルノリを奥へ誘導し、ネオワン号を右へ寄せる。" },
            { type: "text", content: "左に出てくるビッパも合流させて誘導していく。" },
            { type: "text", content: "眠っているビッパの横にリンゴを置きつつ、ビッパにリンゴをぶつけて起こす。" },
            { type: "text", content: "眠っているバッフロンとシナジー対象のビッパ両方にリンゴがぶつかるように投げ、起きたバッフロンを撮影する。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "公園(昼) Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "キュワワー",
          },
          videos: [
            {
              name: "nattattack123",
              score: "5006",
              url: "https://www.twitch.tv/videos/1806315882",
            },
          ],
          steps: [
            { type: "text", content: "最後の花畑エリアの奥の方にいるアフロに花をつけた個体をフラワー近くへ誘導し、ゴール側に向きを変更させる。こうすることでフラワーが2つ入り、風景点を大きく稼げる。" },
            { type: "text", content: "蹄で地面をかくランダムモーションが発生したところを撮影。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["バッフロン"],
            others: "ピチュー、サルノリ、ビッパ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5256",
              url: "https://www.youtube.com/watch?v=fnUw8FZDuqM",
            },
          ],
          steps: [
            { type: "text", content: "ピチューとサルノリを奥へ誘導し、ネオワン号をわずかに左へ寄せて距離を調整する。" },
            { type: "text", content: "左に出てくるビッパも合流させて誘導していく。" },
            { type: "text", content: "バッフロンに向けてメロディを使用すると、互いに頭をぶつけ合うイベントが発生、そこを撮影する。" },
          ]
        }
      ],
    }
  };