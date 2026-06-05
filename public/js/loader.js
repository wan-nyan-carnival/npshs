(function () {
  /* =========================
     1. CSS読み込み（先）
  ========================= */
  const styles = [
    "css/destyle.css",
    "css/jquery-ui.min.css",
    "css/nps.css"
  ];

  styles.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  /* =========================
     2. JS読み込み（順序保証）
  ========================= */
  const scripts = [
    "js/jquery-3.7.1.min.js",
    "js/jquery-ui.min.js",
    "js/pokemon-data.js",
    "js/common.js"
  ];

  function loadScript(index = 0) {
    if (index >= scripts.length) {
      // ★全部読み込み終わった後に初期化
      if (typeof initLayout === "function") {
        initLayout();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = scripts[index];

    script.onload = () => loadScript(index + 1);

    document.body.appendChild(script);
  }

  // CSS → JSの順で開始
  window.addEventListener("DOMContentLoaded", () => {
    loadScript();
  });

})();