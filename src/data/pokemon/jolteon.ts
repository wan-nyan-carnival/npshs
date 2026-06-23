const no = 198;

export default {
    id: "jolteon",
    name: "サンダース",
    en: "Jolteon",
    no,
    groups: ["洞窟", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "バチュル",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "4784",
              url: "https://www.youtube.com/watch?v=YUZk9GuyU74",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "首",
            friend: [""],
            others: "バチュル、イシツブテ",
          },
          videos: [
            {
              name: "Quentin",
              score: "4908",
              url: "https://www.youtube.com/watch?v=ilyJreufHAk",
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
            area: "洞窟 Lv3",
            pose: "変動(1000)",
            position: "頭",
            friend: [""],
            others: "バチュル",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "4879",
              url: "https://www.youtube.com/watch?v=b-rwdTnzuIg",
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
            area: "洞窟 Lv3",
            pose: "変動(800)",
            position: "頭と胴の間",
            friend: ["バチュル"],
            others: "",
          },
          videos: [
            {
              name: "Whom Snaps",
              score: "5012",
              url: "https://www.youtube.com/watch?v=Nek70rFr_UY",
            },
          ],
          steps: [
            { type: "text", content: "誰か書いて。" },
          ]
        }
      ],
    }
  };