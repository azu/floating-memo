/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var mercury = require("mercury");
/**
 * count text
 * @param {Node}element
 * @param state
 */
module.exports = function (element, state) {
    function render(textCount) {
        var h = mercury.h;
        return h("p", String(textCount.value.length));
    }

    mercury.app(element, state, render);
};