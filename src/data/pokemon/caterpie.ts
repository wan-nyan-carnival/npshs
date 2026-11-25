const no = 11;

export default {
    id: "caterpie",
    name: "キャタピー",
    en: "Caterpie",
    no,
    groups: ["公園", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "キャタピー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5331",
              url: "https://www.youtube.com/watch?v=eO5Uo2vArkE",
            },
          ],
          steps: [
            { type: "text", content: "首を傾げているランダムモーションを撮影する。撮影タイミングはキャタピーの尻尾で確認でき、右・左・右と動くので2回目の右を狙う。キャタピーの移動先に関しては運なので、うまくフラワーとキノコを入れて風景点を増加させよう。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "キャタピー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5170",
              url: "https://www.youtube.com/watch?v=CrQ-xm1RD9A",
            },
          ],
          steps: [
            { type: "text", content: "リンゴをぶつけたところを撮影。キャタピーが右を向いており、少し離れた位置にいるのが理想。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "ミツハニー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5353",
              url: "https://www.youtube.com/watch?v=jhC3u_55fPE",
            },
          ],
          steps: [
            { type: "text", content: "タマゲタケたちが木の実を落としたら、タマゲタケの上に乗っているタマゲタケにオーブを当てる。するとピジョットが出現するので、それに驚いているキャタピーを撮影する。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "抜け道(夜)",
            pose: "変動(1000)",
            position: "頭",
            friend: ["キャタピー"],
            others: "",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5864",
              url: "https://youtu.be/YEl1-TglSb8?si=fG287NaKwvvHz4IS",
            },
          ],
          steps: [
            { type: "text", content: "フラワーにオーブを当てると、キャタピーが糸を吐きながら回転するので、そこを撮影する。" },
          ]
        }
      ],
    }
  };