/* =========================
   ヘッダー読み込み
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initPokemonSearch();
  initTabs();
});

/* =========================
   ポケモン検索
========================= */
function initPokemonSearch() {
  if (!$("#pokesearch").length) return;

  let isComposing = false;

  $("#pokesearch")
    .on("compositionstart", () => isComposing = true)
    .on("compositionend", () => isComposing = false)
    .autocomplete({
      search: function () {
        return !isComposing;
      },

      source: function (request, response) {
        const data = window.pokemonData || [];
        const q = request.term.trim().toLowerCase();

        const results = data
          .filter(p =>
            (p.jp && p.jp.toLowerCase().startsWith(q)) ||
            (p.kana && p.kana.startsWith(request.term)) ||
            (p.en && p.en.toLowerCase().startsWith(q))
          )
          .map(p => ({
            label: `${p.jp} (${p.en})`,
            value: p.jp,
            id: p.id
          }));

        response(results);
      },

      select: function (event, ui) {
        $("#pokesearch").val("");
        location.href = `/npshs/${ui.item.id}`;
        return false;
      }
    });
}

/* =========================
   タブ切り替え
========================= */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-contents .content');

  if (!tabs.length || !contents.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      contents[index].classList.add('active');
    });
  });
}