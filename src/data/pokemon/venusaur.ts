const no = 52;

export default {
    id: "venusaur",
    name: "フシギバナ",
    en: "Venusaur",
    no,
    groups: ["ジャングル", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["アーボック"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5836",
              url: "https://www.youtube.com/watch?v=fe2iobTHfPU",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: [""],
            others: "ツツケラ",
          },
          videos: [
            {
              name: "Quentin",
              score: "5596",
              url: "https://www.youtube.com/watch?v=WjiDkFluf4A",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: ["メッソン"],
            others: "アゲハント",
          },
          videos: [
            {
              name: "Quentin",
              score: "5755",
              url: "https://www.youtube.com/watch?v=pclzjk5gat4",
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
            area: "ジャングル(昼) Lv3",
            pose: "変動(1000)",
            position: "胴",
            friend: ["コイキング"],
            others: "メッソン、アゲハント",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5826",
              url: "https://www.youtube.com/watch?v=OXzPMVS1RAA",
            },
          ],
          steps: [
            { type: "text", content: "ウパーを脅しているアーボックにリンゴをぶつける。" },
            { type: "text", content: "アーボックをフシギバナの方へ誘導しつつ、フシギバナをサーチで起こす。アーボックがフシギバナを追い払うと、滝前にフシギバナが出現。" },
            { type: "text", content: "アゲハントを写すつもりなら、アゲハントにリンゴをぶつけて吸水を中断させてから誘導する。" },
            { type: "text", content: "コイキングをフシギバナの近くまで誘導する。" },
            { type: "text", content: "メッソンにメロディを使うと、フシギバナに向けて放物線を描くように水鉄砲をする。その後フラワーを点灯すると、メッソンが直線的に水鉄砲をしてフシギバナが水中に飛び込むので、そこを撮影する。" },
          ]
        }
      ],
    }
  };