window.addEventListener("load", () => {
  const input = document.getElementById("pokesearch");

  if (!input || !window.pokemonData) return;

  // ひらがな → カタカナ変換
  function hiraToKana(str = "") {
    return str.replace(/[\u3041-\u3096]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
  }

  // ★重要：Awesomplete用は「文字列＋id埋め込み」
  const list = window.pokemonData.map(p => ({
    label: `${p.jp} / ${p.en}`,
    value: p.id
  }));

  const aw = new Awesomplete(input, {
    list,
    minChars: 1,

    // 表示
    item: function (text) {
      return Awesomplete.ITEM(text.label, text.label);
    },

    // フィルタ
    filter: function (item, inputValue) {
      const q = hiraToKana((inputValue || "").toString().toLowerCase());

      const p = window.pokemonData.find(x => x.id === item.value);
      if (!p) return false;

      return (
        p.jp.startsWith(q) ||
        p.kana.startsWith(q) ||
        p.en.toLowerCase().startsWith(q)
      );
    }
  });

  // 選択時
  input.addEventListener("awesomplete-selectcomplete", (e) => {
    const id = e.text.value;

    input.value = "";

    window.location.href = `/npshs/${id}`;
  });

  // 戻る対策
  window.addEventListener("pageshow", () => {
    input.value = "";
  });
});