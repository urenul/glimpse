// English is in the page itself; this holds the Chinese and Japanese text and the switch.
(function () {
  var text = {
    zh: {
      'nav.features': '功能',
      'nav.translate': '翻译',
      'nav.hotkeys': '快捷键',
      'nav.build': '构建',
      'hero.title': '截下屏幕，然后用它做点什么。',
      'hero.lead': 'Glimpse 能截图、录屏、标注，还能识别截图里的文字并翻译。需要时可以完全离线，免费且开源。',
      'hero.download': '下载',
      'hero.source': '源代码',
      'dl.site': '从本站下载',
      'nav.releases': '版本',
      'rel.title': '版本',
      'rel.lead': '从本站下载各个版本的 Windows 和 Linux 安装包，与 GitLab 上的发布内容相同。',
      'rel.latest': '最新',
      'rel.download': '下载',
      'rel.dl.windows': '下载 Windows 版',
      'rel.dl.deb': '下载 Linux 版（.deb）',
      'rel.dl.rpm': '下载 Linux 版（.rpm）',
      'rel.dl.other': '下载',
      'rel.pkg.windows': 'Windows x64',
      'rel.pkg.deb': 'Linux .deb',
      'rel.pkg.rpm': 'Linux .rpm',
      'rel.note.deb': 'Debian、Ubuntu',
      'rel.note.rpm': 'Fedora、openSUSE、RHEL',
      'rel.missing': '该版本未提供',
      'rel.elsewhere': '也可以从这里下载：',
      'rel.loading': '正在读取版本列表...',
      'rel.none': '还没有发布任何版本。',
      'rel.error': '暂时无法读取版本列表，可以先到上面的 GitHub 或 GitLab 下载。',
      'dl.github': '从 GitHub 下载',
      'dl.gitlab': '从 GitLab 下载',
      'hero.meta': 'Windows · Linux（X11 和 Wayland）· MIT 许可证',
      'features.title': '一个小工具栏，什么都有',
      'f.capture.t': '截图',
      'f.capture.d': '窗口、矩形、手绘区域或全屏，可设置延时。也可以把截取的区域贴在屏幕上，置于所有窗口之上。',
      'f.edit.t': '标注',
      'f.edit.d': '箭头、形状、文字、序号、高亮和打码，然后保存、复制，或者保存并复制文件路径。',
      'f.rec.t': '录屏',
      'f.rec.d': '录制为 MP4，高亮鼠标指针和点击，并在底部显示按下的键或完整键盘。',
      'f.ocr.t': '识别和翻译',
      'f.ocr.d': '用 Windows OCR、Tesseract 或 PaddleOCR 把屏幕上任何地方的文字复制出来，翻译它，或者把译文直接画在截图上。',
      'f.board.t': '屏幕白板',
      'f.board.d': '在实时刷新的屏幕上直接画，也可以先冻结画面或换成白板再画。打开鼠标穿透，就能边画边操作下面的程序。',
      'f.qr.t': '二维码',
      'f.qr.d': '直接从屏幕识别二维码和条形码，不用掏手机。',
      'f.cross.t': '十字线和取色',
      'f.cross.d': '全屏十字线，显示坐标：锁定一个点后可以量出到另一点的距离；双击像素可以把颜色复制为 HEX、RGB 或 HSL。',
      'f.ruler.t': '屏幕标尺',
      'f.ruler.d': '横竖两把标尺交叉成透明的十字，浮在所有窗口之上，以像素读出鼠标到交叉点的距离。',
      'tr.title': '离线也能翻译',
      'tr.lead': '按电脑配置和文字内容选择引擎。离线引擎只需下载一次模型，屏幕内容不会发送到任何地方。',
      'tr.offline': '离线',
      'tr.online': '在线',
      'tr.firefox': 'Firefox 翻译',
      'tr.firefox.d': 'Mozilla 的 Bergamot 引擎。又快又轻，办公本也能流畅运行。',
      'tr.llm': '本地大模型',
      'tr.llm.d': '通过 llama.cpp 运行 Hy-MT2 或 Qwen3。优先使用显卡（Vulkan），不行时自动改用 CPU。',
      'hk.title': '快捷键',
      'hk.lead': '每个功能都有全局快捷键，都可以在设置中修改。',
      'hk.window': '窗口或区域',
      'hk.board': '屏幕白板',
      'hk.full': '全屏',
      'hk.pin': '贴图到屏幕',
      'hk.qr': '二维码',
      'hk.ocr': '文字识别和翻译',
      'hk.free': '手绘区域',
      'hk.ruler': '屏幕标尺',
      'hk.cross': '十字线和取色',
      'hk.scroll': '滚动截图（实验性）',
      'hk.rec': '录屏',
      'pf.title': '平台支持',
      'pf.capture': '矩形、手绘区域和全屏截图',
      'pf.window': '选取窗口、截图中的鼠标指针',
      'pf.scroll': '滚动截图（实验性）',
      'pf.hotkeys': '全局快捷键',
      'pf.overlay': '录屏中的点击和按键显示',
      'pf.ocr': 'Tesseract 和 PaddleOCR',
      'pf.llm': '本地大模型翻译',
      'pf.firefox': 'Firefox 翻译',
      'pf.planned': '计划中',
      'b.title': '从源码构建',
      'b.lead': '需要 Qt 6.8 或更高版本、CMake 3.24 和支持 C++20 的编译器。其他库会优先使用系统已安装的版本，否则自动下载固定版本。',
      'foot.license': 'MIT 许可证',
      'foot.notices': '第三方声明',
      'foot.icons': '图标：Material Symbols'
    },
    ja: {
      'nav.features': '機能',
      'nav.translate': '翻訳',
      'nav.hotkeys': 'ショートカット',
      'nav.build': 'ビルド',
      'hero.title': '画面をキャプチャして、そのまま活用。',
      'hero.lead': 'Glimpse はスクリーンショットと画面録画を撮り、注釈を付け、画像内の文字を認識して翻訳します。必要ならすべてオフラインで動作し、無料でオープンソースです。',
      'hero.download': 'ダウンロード',
      'hero.source': 'ソースコード',
      'dl.site': 'このサイトから',
      'nav.releases': 'リリース',
      'rel.title': 'リリース',
      'rel.lead': '各バージョンの Windows / Linux 版パッケージをこのサイトからダウンロードできます。GitLab のリリースと同じ内容です。',
      'rel.latest': '最新',
      'rel.download': 'ダウンロード',
      'rel.dl.windows': 'Windows 版をダウンロード',
      'rel.dl.deb': 'Linux 版（.deb）をダウンロード',
      'rel.dl.rpm': 'Linux 版（.rpm）をダウンロード',
      'rel.dl.other': 'ダウンロード',
      'rel.pkg.windows': 'Windows x64',
      'rel.pkg.deb': 'Linux .deb',
      'rel.pkg.rpm': 'Linux .rpm',
      'rel.note.deb': 'Debian、Ubuntu',
      'rel.note.rpm': 'Fedora、openSUSE、RHEL',
      'rel.missing': 'このリリースにはありません',
      'rel.elsewhere': 'こちらからも入手できます：',
      'rel.loading': 'リリース一覧を読み込んでいます...',
      'rel.none': 'まだリリースはありません。',
      'rel.error': '現在リリース一覧を読み込めません。上の GitHub か GitLab からダウンロードしてください。',
      'dl.github': 'GitHub から',
      'dl.gitlab': 'GitLab から',
      'hero.meta': 'Windows · Linux（X11 / Wayland）· MIT ライセンス',
      'features.title': '小さなツールバーにすべてを',
      'f.capture.t': 'キャプチャ',
      'f.capture.d': 'ウィンドウ、矩形、フリーハンド、全画面。遅延も設定できます。キャプチャした領域を画面に貼り付け、すべてのウィンドウの前面に表示することもできます。',
      'f.edit.t': '注釈',
      'f.edit.d': '矢印、図形、テキスト、番号、ハイライト、モザイクを付けて、保存、コピー、または保存してファイルのパスをコピーできます。',
      'f.rec.t': '録画',
      'f.rec.d': 'MP4 で録画し、マウスポインターとクリックを強調表示します。押したキーやキーボード全体を下部に表示することもできます。',
      'f.ocr.t': '認識と翻訳',
      'f.ocr.d': 'Windows OCR、Tesseract、PaddleOCR で画面のどこからでも文字をコピーし、翻訳したり、訳文をキャプチャに直接描き込んだりできます。',
      'f.board.t': '画面ホワイトボード',
      'f.board.d': '更新され続ける画面にそのまま描くことも、画面を止めてから、あるいはホワイトボードに切り替えて描くこともできます。マウスを透過させれば、描きながら下のアプリを操作できます。',
      'f.qr.t': 'QR コード',
      'f.qr.d': 'QR コードやバーコードを画面から直接読み取れます。スマートフォンは要りません。',
      'f.cross.t': '十字線とカラーピッカー',
      'f.cross.d': '座標付きの全画面十字線。1 点を固定すると別の点までの距離を測れます。ピクセルをダブルクリックすると、その色を HEX、RGB、HSL でコピーします。',
      'f.ruler.t': 'スクリーンルーラー',
      'f.ruler.d': '縦横 2 本の定規が透明な十字を作り、すべてのウィンドウの前面に浮かんで、マウスから交点までの距離をピクセル単位で示します。',
      'tr.title': 'オフラインでも翻訳',
      'tr.lead': 'PC の性能と文章に合わせてエンジンを選べます。オフラインのエンジンはモデルを一度ダウンロードするだけで、画面の内容をどこにも送りません。',
      'tr.offline': 'オフライン',
      'tr.online': 'オンライン',
      'tr.firefox': 'Firefox 翻訳',
      'tr.firefox.d': 'Mozilla の Bergamot エンジン。速くて軽く、事務用ノート PC でも快適に動きます。',
      'tr.llm': 'ローカル LLM',
      'tr.llm.d': 'llama.cpp で Hy-MT2 または Qwen3 を動かします。GPU（Vulkan）を優先し、使えなければ CPU に切り替えます。',
      'hk.title': 'ショートカット',
      'hk.lead': 'すべての機能にグローバルショートカットがあり、どれも設定で変更できます。',
      'hk.window': 'ウィンドウまたは領域',
      'hk.board': '画面ホワイトボード',
      'hk.full': '全画面',
      'hk.pin': '画面に貼り付け',
      'hk.qr': 'QR コード',
      'hk.ocr': '文字認識と翻訳',
      'hk.free': 'フリーハンド領域',
      'hk.ruler': 'スクリーンルーラー',
      'hk.cross': '十字線とカラーピッカー',
      'hk.scroll': 'スクロールキャプチャ（試験的）',
      'hk.rec': '画面録画',
      'pf.title': '対応プラットフォーム',
      'pf.capture': '矩形、フリーハンド、全画面のキャプチャ',
      'pf.window': 'ウィンドウの選択、キャプチャ内のマウスポインター',
      'pf.scroll': 'スクロールキャプチャ（試験的）',
      'pf.hotkeys': 'グローバルショートカット',
      'pf.overlay': '録画中のクリックとキーの表示',
      'pf.ocr': 'Tesseract と PaddleOCR',
      'pf.llm': 'ローカル LLM による翻訳',
      'pf.firefox': 'Firefox 翻訳',
      'pf.planned': '予定',
      'b.title': 'ソースからビルド',
      'b.lead': 'Qt 6.8 以降、CMake 3.24、C++20 対応のコンパイラーが必要です。その他のライブラリはシステムにあるものを使い、なければ固定バージョンを自動でダウンロードします。',
      'foot.license': 'MIT ライセンス',
      'foot.notices': 'サードパーティーの表示',
      'foot.icons': 'アイコン：Material Symbols'
    }
  };
  var names = {en: 'English', zh: '简体中文', ja: '日本語'};
  var htmlLang = {en: 'en', zh: 'zh-CN', ja: 'ja'};

  var button = document.getElementById('lang');
  var menu = button.parentNode;

  // Rescans the page each time, so parts added later (the release list) are
  // translated too; each element keeps its English text in data-en.
  function apply(lang) {
    var table = text[lang] || {};
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.dataset.en === undefined) node.dataset.en = node.textContent;
      node.textContent = table[node.getAttribute('data-i18n')] || node.dataset.en;
    }
    document.documentElement.lang = htmlLang[lang];
    button.textContent = names[lang];
    var items = menu.querySelectorAll('[data-lang]');
    for (var j = 0; j < items.length; j++)
      items[j].setAttribute('aria-current', items[j].getAttribute('data-lang') === lang ? 'true' : 'false');
    try { localStorage.setItem('glimpse-lang', lang); } catch (e) {}
  }

  function preferred() {
    var saved = null;
    try { saved = localStorage.getItem('glimpse-lang'); } catch (e) {}
    if (names[saved]) return saved;
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh/i.test(langs[i])) return 'zh';
      if (/^ja/i.test(langs[i])) return 'ja';
      if (/^en/i.test(langs[i])) return 'en';
    }
    return 'en';
  }

  var lang = preferred();
  apply(lang);

  menu.addEventListener('click', function (event) {
    var item = event.target.closest('[data-lang]');
    if (!item) return;
    event.preventDefault();
    lang = item.getAttribute('data-lang');
    apply(lang);
    menu.open = false;
  });
  window.glimpseRetranslate = function () { apply(lang); };

  // Drop-down menus (download, language, the release list's) close on a click
  // elsewhere or Escape; one is open at a time.
  function openMenus() {
    return Array.prototype.slice.call(document.querySelectorAll('details.dropdown[open]'));
  }
  document.addEventListener('click', function (event) {
    openMenus().forEach(function (open) {
      if (!open.contains(event.target)) open.open = false;
    });
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    openMenus().forEach(function (open) {
      open.open = false;
      open.querySelector('summary').focus();
    });
  });
})();
