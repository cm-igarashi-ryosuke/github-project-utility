$(function() {
  // 集計ボタンを追加
  const header = $('div.project-header-controls');
  header.append(
    '<div class="pl-4 hide-sm"><button id="sumBtn">集計</button></div>'
  );

  // ボタンを押したときの処理
  $(document).on('click', '#sumBtn', function() {
    // レーンごとに時間を集計
    $('div.project-column').each(function() {
      let total = 0;
      // Issue, Card
      $(this)
        .find('a.js-project-card-issue-link, div.js-comment-body > p')
        .each(function() {
          total += extractHours($(this).text());
        });
      const title = $(this).find('span.js-project-column-name');
      const addText = total > 0 ? `[${total}h]` : '';
      const newTitle = title
        .text()
        .replace(/\[\d+h\]$/, '')
        .concat(addText);
      title.text(newTitle);
    });
  });
});

function extractHours(str) {
  const regexp = /\[(\d+)h\]/g;
  let value = 0;
  while ((matches = regexp.exec(str)) !== null) {
    value = parseInt(matches[1]); // 最後にマッチした文字を返すようにする
  }
  return value;
}
