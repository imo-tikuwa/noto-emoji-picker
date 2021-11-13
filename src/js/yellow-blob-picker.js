"use strict";

import jQuery from 'jquery';
window.$ = jQuery;

import '@fonticonpicker/fonticonpicker/dist/js/jquery.fonticonpicker.min';

// icomoonで作成したフォントをダウンロードした際に含まれていたselection.jsonを読み込み、
// アイコン名とパス数のマッピングを作成する
window.__YELLOW_BLOB_ICONS_PATH_COUNT_MAP = {};
let selection = require('../icomoon_json/selection.json');
selection.icons.forEach(icon => {
    window.__YELLOW_BLOB_ICONS_PATH_COUNT_MAP[icon.properties.name] = icon.properties.codes.length;
});