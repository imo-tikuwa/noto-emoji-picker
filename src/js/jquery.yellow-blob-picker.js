/*global require */
import '@fonticonpicker/fonticonpicker/dist/js/jquery.fonticonpicker.min';

(function($){
    "use strict";

    const yellowBlobIconsPathCountMap = require('../icomoon_json/converted_selection.json');

    let methods = {
        init: function(options) {
            // @fonticonpicker/fonticonpickerの固定したいオプション
            let staticFontIconPickerSettings = {
                source: Object.keys(yellowBlobIconsPathCountMap),
                iconGenerator: icon => {
                    return $.createYellowBlobIcon(icon);
                }
            };
            this.fontIconPicker($.extend(options, staticFontIconPickerSettings));
            return this;
        }
    };

    $.fn.yellowBlobPicker = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.yellowBlobPicker');
        }
    };

    // アイコンのhtmlを作成する処理についてグローバルな呼び出しが行えるよう関数として追加
    $.extend({
        createYellowBlobIcon: icon => {
            if (!(icon in yellowBlobIconsPathCountMap)) {
                return null;
            }
            let html = `<i class='${icon}'>`;
                for (let path = 1; path <= yellowBlobIconsPathCountMap[icon]; path++) {
                    html += `<span class=\'path${path}\'></span>`;
                }
                html += '</i>';
            return html;
        }
    });
})(jQuery);
