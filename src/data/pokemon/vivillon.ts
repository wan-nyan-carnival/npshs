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
            { type: "text", content: "道中の足止めになるビッパは右に寄せることで回避可能。" },
            { type: "text", content: "コース後半の花畑エリア手前にいるビビヨンのランダムモーションを撮影する。ランダムモーションは降下モーション・左右確認モーション・宙返りモーションの3つであり、狙うのは宙返り。" },
            { type: "text", content: "ランダムモーションなので何もしなくても発生する可能性はあるが、特定の位置や角度で撮影するならサーチで誘発する。サーチ後に少し移動してからランダムモーションを取る。具体的には移動しながらわずかに右揺れ→左揺れを終えた後。" },
            { type: "text", content: "看板の上にいるスバメにリンゴをぶつけることで、スバメを花畑方面に飛ばすことができ、もしかしたら他のポケモン点の増加を狙えるかもしれないけど、たぶんビビヨンで隠れる。" },
//            { type: "image", src: "/img/step1.png", alt: "〇〇の場所", note:"説明" },
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
            { type: "text", content: "ミュウのイベントを進行することで他のポケモン点の増加を見込める。各ポイントで出現するミュウにオーブを当てることで写真に収めることが可能になる。各ポイントは開幕前方・フシギバナ付近での背後・古代遺跡付近での前方・滝裏で出現したタイミングの4箇所。" },
            { type: "text", content: "レパルダスにオーブを当てて、分岐を選択し滝裏へと移動する。" },
            { type: "text", content: "サーチでビビヨンを起動し、メッソンにリンゴをぶつけ、泣いているところを撮影する。" },
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
            others: "ピカチュウ、イーブイ、コイキング、ビークイン、ミツハニー、タマゲタケ、モジャンボ",
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
            { type: "text", content: "イベントを進行することで、花畑エリアにコイキングが出現する。手順はヤミカラス2匹にオーブを当て、ピジョットを追い払う。巣の根本にオーブを投げてコイキングを出現させる。跳ねていった先にあるフラワーにオーブ投げて点灯させる。" },
            { type: "text", content: "抜け道から脱出して花畑エリアに入った後、右側にいるビビヨンをリンゴで誘導、ピカチュウとイーブイが眠っている地点を目指す。" },
            { type: "text", content: "モジャンボはリンゴをぶつけると移動する。たぶんどかした方が他のポケモン点は高い。" },
            { type: "text", content: "リンゴでビビヨンを正面に向かせ、裏に回るようにすり抜ける。向きを維持するためサーチを連打し、左右に大きくぐるりと回るランダムモーションを誘発できたタイミングで通り抜ける。" },
            { type: "text", content: "ランダムモーションである宙返りが発生するのを祈って撮影する。" },
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
            { type: "text", content: "ヌオーイベントを進行することで他のポケモン点を増加できる。まず水を飲んでいるトロピウスにオーブを当てると、コダックがヌオーを河に落とす。その後ヌオーが泳いでいるところにメロディを使用。" },
            { type: "text", content: "分岐を選択し、洞窟内に入ったら左側にいるヌオーに向けてサーチを使用し、その後に再度メロディを使用するとヌオーがフラワー付近へ移動する。" },
            { type: "text", content: "ビビヨンをリンゴで左側に誘導し、ランダムモーションである宙返りを行ったところを撮影する。" },
          ]
        }
      ],

      3: [
        {
          image: `/npshs/img/${no}/poke3c.png`,
          info: {
            area: "遺跡 Lv3",
            pose: "変動(800)",
            position: "頭",
            friend: [""],
            others: "ジラーチ、シンボラー",
          },
          videos: [
            {
              name: "Quentin",
              score: "4888",
              url: "https://www.youtube.com/watch?v=p4DssQf7SUI",
            },
          ],
          steps: [
            { type: "text", content: "メインルームへ降りる際、左奥にいるゴルーグにオーブを当てて移動させる。その裏にあるものを含めた3箇所のフラワーを点灯させる。これはフラワー6箇所を点灯させるジラーチイベントの準備。" },
            { type: "text", content: "できるだけ早い段階で、傷跡のある地面にリンゴを投げてオンバーンを出現させる。丘の左側に沿ってオンバーンを誘導し、そこでネオワン号を永続ブレーキにかける。" },
            { type: "text", content: "旋回しているシンボラーをサーチし、自分の頭上に留まらせる。これを定期的に繰り返して維持する。" },
            { type: "text", content: "眠っているジラーチにはあらかじめオーブを1回当てておく。（2回当てると目覚めるのでその準備）" },
            { type: "text", content: "ワタシラガにオーブを当てて移動させ、後ろにあるものを含む2箇所のフラワーを点灯させる。" },
            { type: "text", content: "シンボラー2匹を合流させたら、見えない位置に存在する最後のフラワーを点灯させる。これにより光の柱が立ち、たいりくのもようのビビヨンが出現。" },
            { type: "text", content: "光の柱が立ったら、すぐにジラーチにオーブを当てて起こす。その後、ジラーチが目の前を通過する時にもう一度オーブを当てて、回転モーションを誘発させる。またメロディも使用し、シンボラーのポーズを高める。" },
            { type: "text", content: "3番目のビビヨンがランダムモーションである宙返りを行ってくれることを祈りながら撮影する。" },
          ]
        },
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
            { type: "text", content: "コースに入ったらすぐに上を向き、ゼラオラに向けてリンゴを遠投し、ぶつけることで起こす。" },
            { type: "text", content: "前方にいるたいようのもようのビビヨンにオーブを当てる。すると岩に留まっているビビヨンたちの進行ルートが変化する。" },
            { type: "text", content: "地面にいるディグダ2匹にオーブを当て、それぞれ撮影することで岩を押すイベントの条件を満たす。" },
            { type: "text", content: "可能なら右側にいるイワパレスを左に誘導する動作を挟んでから、サバンナのもようのビビヨンにオーブを投げる。このオーブのタイミングで仲間ビビヨンのタイミングを調整でき、ビビヨンが後ろから見て左・右・左・右と交互に首を振る動作のうち2回目の右を向いたタイミングでオーブを当てる。" },
            { type: "text", content: "バンギラスにリンゴを当て、すぐにフラワーにオーブを投げる。バンギラスにリンゴを当てるタイミングでゼラオラのタイミングが、フラワーを点灯させたタイミングで主役ビビヨンのタイミングが決まる。" },
            { type: "text", content: "ターボをかけ、正面を向き続けるように調整。グライオンを出現させたら、宙返りでブレーキがかかるタイミングでオーブを当てる。" },
            { type: "text", content: "下ボタンで振り返り、ビビヨンが少し高度を下げたタイミングを狙って撮影する。" },
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
            { type: "text", content: "渦エリアに入ったあたりで左を向いておく。" },
            { type: "text", content: "背景の岩を目安にして、右を向きフラワーを点灯させ、左ボタンで左に向き直す。" },
            { type: "text", content: "岩の模様を目安にしてビビヨンの方へ向き、ビビヨンがこちらを向いたところを撮影。" },
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
              name: "CHANRYO",
              score: "5207",
              url: "https://www.youtube.com/watch?v=EEKi6FOBDmo&t=285s",
            },
           {
              name: "Quentin",
              score: "5157",
              url: "https://www.youtube.com/watch?v=00y-JdIuj0c",
            },
          ],
          steps: [
            { type: "text", content: "ウソッキーをリンゴでフラワー近くに誘導し、フラワーを点灯させることで、ウソッキー・コラッタ・ヤブクロンが移動する。これらを中央に集めることで他のポケモン点の増加が見込める。" },
            { type: "text", content: "ネオワン号の上で寝ているデデンネにリンゴをぶつけ、サーチポイントのある草むら奥へとリンゴで誘導することで、ボールのもようのビビヨンが出現する。" },
            { type: "text", content: "デデンネとビビヨンは定位置まで移動すると自由行動となり、ビビヨンのランダムモーションである宙返りを行ったところを撮影する。ネオワン号2機を収めることで風景点アップ。" },
            { type: "text", content: "デデンネとビビヨンは一度だけメロディで特殊モーションを誘発できるので、邪魔なら消化するなり、時間稼ぎに使うなりする。" },
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
            { type: "text", content: "分岐を選択し、湿地帯エリアへと移動する。" },
            { type: "text", content: "エイパムにオーブを当てて草刈りを発生させると、奥にいるスコールのもようのビビヨンが出現するので、右側の個体を主役にして撮影する。" },
          ]
        }
      ],
    }
  };