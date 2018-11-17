# GitHub Project Utility
レーン内のCardとIssueのタイトルから、 `[*h]` フォーマットで書かれた時間を検索し、合計時間をレーンのタイトル部分に表示します。

## Prepare
jqueryライブラリをプロジェクト直下にダウンロードします。バージョンは `manifest.json` を参照してください。
```
$ wget https://code.jquery.com/jquery-3.3.1.min.js
```

## Install
- Google Chrome で `chrome://extensions/` を開きます。
- デベロッパーモードを有効にします。
- パッケージ化されていない拡張機能を読み込むボタンを押し、プロジェクトのディレクトリを読み込みます。

## Usage
- GitHubのProjectページの右上に「集計」ボタンが表示されるので、クリックします。
