/*global window,require */
import jQuery from 'jquery';
window.$ = jQuery;

import '@fonticonpicker/fonticonpicker/dist/js/jquery.fonticonpicker.min';

window.__YELLOW_BLOB_ICONS_PATH_COUNT_MAP = require('../icomoon_json/converted_selection.json');

(function($){
    "use strict";

    let methods = {
        init: function(options) {
            // @fonticonpicker/fonticonpickerの固定したいオプション
            let staticFontIconPickerSettings = {
                source: Object.keys(window.__YELLOW_BLOB_ICONS_PATH_COUNT_MAP),
                iconGenerator: icon => {
                    let html = `<i class='${icon}'>`;
                        for (let path = 1; path <= window.__YELLOW_BLOB_ICONS_PATH_COUNT_MAP[icon]; path++) {
                            html += `<span class=\'path${path}\'></span>`;
                        }
                        html += '</i>';
                    return html;
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
})(jQuery);
