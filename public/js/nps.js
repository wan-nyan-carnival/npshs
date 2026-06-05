$(function() {
  // トップボックスの共有
  $('#top-box').load('topbox.html #header', function() {
    initPokemonSearch();
    initTabs();
  });

  // 動画リンクの作成
  $(".vlink").each(function() {
    $(this).html(
      $(this).html().replace(
        /(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank">$1</a>'
      )
    );
  });
});

// ポケモン検索
function initPokemonSearch() {
  $.ui.autocomplete.prototype._renderItem = function (ul, item) {
    return $("<li></li>")
      .data("item.autocomplete", item)
      .append(
        $("<div class='suggest1'></div>").text(item.label)
      )
      .appendTo(ul);
  };

  let isComposing = false;

  $("#pokesearch")
  .on("compositionstart", () => isComposing = true)
  .on("compositionend", () => isComposing = false)
  .autocomplete({
    search: function () {
      return !isComposing; // 変換中は検索しない
    },
    source: function (request, response) {
      const term = request.term;
      const lower = term.toLowerCase();
      const englishMode = isEnglish(term);

      response(
        pokemonData
          .filter(word => {
            if (englishMode) {
              return word.en.toLowerCase().startsWith(lower);
            } else {
              return (
                word.jp.startsWith(term) ||
                word.kana.startsWith(term)
              );
            }
          })
          .map(word => ({
            ...word,
            label: englishMode ? word.en : word.jp
          }))
      );
    },
    select: function (event, ui) {
      $('#pokesearch').val('');
      location.href = ui.item.url;
      return false;
    }
  });
}

function isEnglish(text) {
  return /^[a-zA-Z\s]*$/.test(text);
}

// タブ切り替え
function initTabs() {
  const tabs = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-contents .content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      contents[index].classList.add('active');
    });
  });
}

// CSリンク生成
function csLink(starNum) {
  const pageName = window.location.pathname.split('/').pop(); // ページ名を取得
  const pageNum = parseInt(pageName.replace('.html', ''), 10); // 数値化
  const csUrlNo = pageNum + 464549 + starNum * 214;
  const csUrl = "https://cyberscore.me.uk/charts/" + csUrlNo; // URL作成
  window.open(csUrl, '_blank'); // URLへジャンプ
}