let fs = require("fs");

// icomoonで作成したフォントをダウンロードした際に含まれていたselection.jsonを読み込み、
// アイコン名とパス数のマッピングjsonを作成する
let map = {}, selection = require('../icomoon_json/selection.json');
selection.icons.forEach(icon => {
    map[icon.properties.name] = icon.properties.codes.length;
});

// ファイル出力
try {
    fs.writeFileSync('src/icomoon_json/converted_selection.json', JSON.stringify(map));
} catch(e) {
    console.log(e);
}