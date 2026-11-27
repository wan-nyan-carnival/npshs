const no = 4;

export default {
    id: "scorbunny",
    name: "ヒバニー",
    en: "Scorbunny",
    no,
    groups: ["公園", "砂漠", "抜け道", ],
    stars: {
      1: [
        {
          image: `/npshs/img/${no}/poke1.png`,
          info: {
            area: "抜け道(昼)",
            pose: "変動(1000)",
            position: "頭",
            friend: ["ピチュー"],
            others: "スバメ",
          },
          videos: [
            {
              name: "Googolbonker",
              score: "5659",
              url: "https://www.youtube.com/watch?v=GonUnmWW8S0",
            },
          ],
          steps: [
            { type: "text", content: "ドダイトスの下を通過し、木のトンネルの奥に見えるヒバニーを撮影。" },
            { type: "text", content: "ヒバニーが取るランダムポーズは1種類で、片足立ちするものだが、どのタイミングで行うかはランダム。トンネル中盤ならズーム撮影、終盤ならズームアウト撮影となる。" },
            { type: "text", content: "ヒバニーのポーズ1000点は耳が真上に立ってからの後半あたり。左に倒れ始めた瞬間にポーズバッファをやめる。位置は鼻の上。" },
            { type: "text", content: "ピチューもランダムモーションであり、上位を狙うならヒバニーのポーズとピチューのポーズが噛み合う必要がある。ピチューは背伸びするポーズが狙い目で、3回に分けて耳を震わせるがそれの2回目が終わったタイミングがポーズ800。手が上がりきったところ。" },
          ]
        }
      ],

      2: [
        {
          image: `/npshs/img/${no}/poke2.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "変動(800)",
            position: "胴と頭の中間",
            friend: ["サルノリ"],
            others: "キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5756",
              url: "https://www.youtube.com/watch?v=pasyiGgOAJ0",
            },
          ],
          steps: [
            { type: "text", content: "事前にネオワン号を左に寄せておき、ズームで左右位置を動かないようにする。" },
            { type: "text", content: "入ってすぐ右にあるフラワーをオーブで点灯させてキュワワーを集め、フラワーの右にリンゴを投げておくことで写真の枠内に入るようにする。" },
            { type: "text", content: "右から左へ走っていくサルノリとヒバニーをリンゴで誘導し、右のフラワー側へと引き戻す。この時サルノリが手前・ヒバニーが奥になるように調整する。" },
            { type: "text", content: "ピチューが隠れている場所にリンゴを投げるとピチューが飛び出し、ヒバニーとサルノリが駆け寄って喜ぶ動作をするので、そこを撮影する。（距離があるので駆け寄りきれない）" },
            { type: "text", content: "ポーズ点はヒバニーが2回目のジャンプを行った頂点あたり。サルノリとの中間点を撮影する。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3.png`,
          info: {
            area: "砂漠(昼) Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "サボネア、エレザード",
          },
          videos: [
            {
              name: "tripledubz",
              score: "5293",
              url: "https://www.twitch.tv/videos/2817304049",
            },
            {
              name: "Herpingyoshi",
              score: "5113",
              url: "https://www.youtube.com/watch?v=ElC4nucCKUI",
            },
          ],
          steps: [
            { type: "text", content: "開幕すぐの右方にある岩の裏に地面を掘っているヒバニーが存在し、足跡付近にリンゴを投げることでこちら側に移動してくる。" },
            { type: "text", content: "リンゴを使って、フラワーの前にある斜面の下の方へヒバニーを誘導する。" },
            { type: "text", content: "ヒバニーにオーブを当てると手を振るので、そこを撮影する。" },
            { type: "text", content: "丘の上にいるサボネアたちにオーブを当てることで、同じようにリンゴで連れていけるようになる。" },
          ]
        }
      ],

      4: [
        {
          image: `/npshs/img/${no}/poke4.png`,
          info: {
            area: "公園(昼) Lv3",
            pose: "固定(950)",
            position: "頭と胴の間",
            friend: ["ヒバニー"],
            others: "サルノリ、キュワワー",
          },
          videos: [
            {
              name: "黒歌鳥",
              score: "5903",
              url: "https://www.youtube.com/watch?v=99bpjjPWZuk",
            },
            {
              name: "だれか",
              score: "Part1",
              url: "https://x.com/someone_kuro/status/1736074321469362330",
            },
            {
              name: "",
              score: "Part2",
              url: "https://x.com/someone_kuro/status/1736075476236656704",
            },
            {
              name: "",
              score: "Part3",
              url: "https://x.com/someone_kuro/status/1736076409280536711",
            },
            {
              name: "",
              score: "Part4",
              url: "https://x.com/someone_kuro/status/1736077336666390978",
            },
          ],
          steps: [
            { type: "text", content: "終盤の花畑エリアに入った直後、右方にあるフラワーを点灯することでキュワワーが集まり、リンゴで誘導できるようになる。これらを撮影地点まで連れていくことで他のポケモン点が増加。" },
            { type: "text", content: "左側、ヒバニーとサルノリがいる場所の近くに茂みがあり（サーチすると？？？と表示される）、この茂みにリンゴもしくはオーブを投げ入れることでピチューが飛び出し、コースの最後にあるフラワーに向けて走り出すイベントが発生。" },
            { type: "text", content: "フラージェス付近のフラワーを点灯させると、シェイミがピチューたちの場所に合流する。" },
            { type: "text", content: "あらかじめ左に寄せておきズームを維持する、もしくは左に寄せてからズームを押すなどしてヒバニーたちの正面を取れるように位置を調整する。" },
            { type: "text", content: "ヒバニーを主役にできるようターゲットしておき、ピチューがジャンプしたところを撮影する。撮影タイミングはピチューのジャンプが落下を始めるあたりで耳が内に閉じつつあるところ。ヒバニーが右足を上げているところ。" },
          ]
        }
      ],
    }
  };