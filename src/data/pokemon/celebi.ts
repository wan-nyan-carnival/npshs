const no = 78;

export default {
    id: "celebi",
    name: "セレビィ",
    en: "Celebi",
    no,
    groups: ["樹海", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "樹海",
            pose: "固定(1500)",
            position: "頭と首の間",
            friend: ["セレビィ"],
            others: "ジジーロン？",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "6475",
              url: "https://www.youtube.com/watch?v=Kn8gRyZytqE",
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
            area: "樹海",
            pose: "変動(2000)",
            position: "胴",
            friend: ["カジッチュ"],
            others: "",
          },
          videos: [
            {
              name: "Quentin",
              score: "6511",
              url: "https://www.youtube.com/watch?v=aaNer2t2v-A",
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
            area: "樹海",
            pose: "変動(2000)",
            position: "胴",
            friend: ["カジッチュ"],
            others: "キテルグマ",
          },
          videos: [
            {
              name: "Pokemario6456",
              score: "6174",
              url: "https://www.youtube.com/watch?v=fSSanHaNmzI",
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
            area: "樹海",
            pose: "固定(1500)",
            position: "頭と胴の間",
            friend: ["セレビィ"],
            others: "",
          },
          videos: [
            {
              name: "Pokemario6456",
              score: "6427",
              url: "https://www.youtube.com/watch?v=JQeSUhhSg3s",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };