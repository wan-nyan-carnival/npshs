const no = 188;

export default {
    id: "noibat",
    name: "オンバット",
    en: "Noibat",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "固定(450)",
            position: "頭",
            friend: [""],
            others: "オンバット、ヌメルゴン、クロバット、ピッピ、バチュル",
          },
          videos: [
            {
              name: "だれか",
              score: "",
              url: "https://www.youtube.com/watch?v=9POpsP_uRkc",
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
            area: "洞窟 Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "オンバット、メレシー",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5244",
              url: "https://www.youtube.com/watch?v=FaD_8FagREM",
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
            area: "洞窟 Lv2",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5174",
              url: "https://www.youtube.com/watch?v=ztza6jgg6wM",
            },
            {
              name: "kumamop",
              score: "5169",
              url: "https://www.youtube.com/watch?v=bNFSSgsJcYg",
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
            area: "洞窟 Lv2",
            pose: "固定(950)",
            position: "頭",
            friend: [""],
            others: "なし",
          },
          videos: [
            {
              name: "MahoMiau",
              score: "5164",
              url: "https://www.youtube.com/watch?v=cLEqdPqpCLU",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };