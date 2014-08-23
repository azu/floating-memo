/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var editor = CodeMirror.fromTextArea(document.getElementById("floating-memo"), {
    mode: "markdown",
    extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
});
module.exports = editor;