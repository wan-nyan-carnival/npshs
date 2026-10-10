const no = 15;

export default {
    id: "ducklett",
    name: "コアルヒー",
    en: "Ducklett",
    groups: ["公園", ],
    no,
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "コアルヒー",
          },
          videos: [
            {
              name: "Milc",
              score: "",
              url: "https://www.youtube.com/watch?v=_9HIhAIJ85E",
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
            area: "公園(夜) Lv2",
            pose: "変動(1000)",
            position: "胴と胴の間",
            friend: ["コアルヒー"],
            others: "スワンナ",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5256",
              url: "https://www.youtube.com/watch?v=OlHCnpAt9_s",
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
            area: "抜け道(夜)",
            pose: "固定(950)",
            position: "胴と胴の間",
            friend: ["コアルヒー"],
            others: "",
          },
          videos: [
            {
              name: "kosmicwaffle",
              score: "5684",
              url: "https://www.youtube.com/watch?v=8bP-aY16vS0",
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
            area: "公園(昼) Lv3",
            pose: "固定(950)",
            position: "頭(※)",
            friend: [""],
            others: "ビッパ、コイキング、コアルヒー、ホーホー",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5593",
              url: "https://www.youtube.com/watch?v=YrrVmRUa-js",
            },
          ],
          steps: [
            { type: "text", content: "道中をターボで進み、丘を越えると遠くに四本の細い木が見えるので、ポインタの位置が右から1番目と2番目の木の間あたりにきたらポーズバッファを開始し、ポインタが2番目と3番目あたりに到達するまで続ける。これにより飛行中のコアルヒーの角度が変化する。" },
            { type: "text", content: "右ボタンで視点を変更したら、湖にある三角の岩の頂点とポインタの縦軸が重なったらターボをやめ、カメラを左上に移動させてからズームし、リンゴで奥のコアルヒーを右へ誘導する。" },
            { type: "text", content: "巣の頂点にリンゴをぶつけてビッパを登場させ、さらに右上にリンゴを投げることで水中からコイキングを登場させる。これらで他のポケモン点を加算できる。" },
            { type: "text", content: "橋に組み込まれている右に突き出た太い枝の上あたりにカメラをあわせ、枠内にコアルヒーの翼が完全に収まったあたりでズームアウトを開始。コアルヒーの顔がポインタに到達したら撮影する。" },
            { type: "text", content: "※高速で動いているため、本来の位置点が1Fぶんズレているので注意。" },
          ]
        }
      ],
    }
  };