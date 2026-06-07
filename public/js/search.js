window.addEventListener("load", () => {
  const input = document.getElementById("pokesearch");

  if (!input || !window.pokemonData) return;

  // ひらがな → カタカナ変換
  function hiraToKana(str = "") {
    return str.replace(/[\u3041-\u3096]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
  }

  // 表示用ラベル（Awesompleteは文字列で安定させる）
  const list = window.pokemonData.map(p => ({
    label: `${p.jp} / ${p.en}`,
    value: p
  }));

  const aw = new Awesomplete(input, {
    list: list,
    minChars: 1,

    // 表示形式
    item: function (text, input) {
      return Awesomplete.ITEM(text.label, text);
    },

    // フィルタ（ここが重要）
    filter: function (item, input) {
      const q = hiraToKana((input || "").toString().toLowerCase());

      return (
        item.value.jp.startsWith(q) ||
        item.value.kana.startsWith(q) ||
        item.value.en.toLowerCase().startsWith(q)
      );
    }
  });

  // 選択時の遷移
  input.addEventListener("awesomplete-selectcomplete", (e) => {
    const selected = e.text.value; // {id, jp, kana, en}

    if (selected && selected.id) {
      window.location.href = `/npshs/${selected.id}`;
    }
  });
});