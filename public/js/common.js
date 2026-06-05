/* =========================
   ヘッダー読み込み
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initPokemonSearch();
  initTabs();
  initVLink();
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
            url: p.url
          }));

        response(results);
      },

      select: function (event, ui) {
        $("#pokesearch").val("");
        location.href = ui.item.url;
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

/* =========================
   URLリンク自動変換
========================= */
function initVLink() {
  $(".vlink").each(function () {
    const html = $(this).html();

    const converted = html.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    $(this).html(converted);
  });
}

/* =========================
   CSリンク生成
========================= */
function csLink(starNum) {
  const pageName = window.location.pathname
    .split("/")
    .filter(Boolean); // ページ名を取得
  const pageNum = Number(pageName.pop()); // 数値化
  const csUrlNo = pageNum + 464549 + starNum * 214;
  const csUrl = "https://cyberscore.me.uk/charts/" + csUrlNo; // URL作成
  window.open(csUrl, '_blank'); // URLへジャンプ
}