/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var mercury = require("mercury");
var Delegator = mercury.Delegator;
var del = Delegator();

var editor = require("./editor");
var textCounter = require("./text-counter");
var textState = mercury.struct({
    value: mercury.value("")
});

textCounter(document.getElementById("js-text-counter"), textState);
editor.on("change", function (cm) {
    textState.value.set(cm.getValue());
});
// initialize
var recorder = require("./text-recorder")(textState);
var stack = recorder.restore();
if (stack.length > 0) {
    editor.setValue(stack.pop());
}
// save button
del.addEventListener(document.getElementById("save-button"), "click", function (event) {
    window.dayOne(textState.value(), ["memo"], function saved(error) {
        console.log(error);
    });
});

var userConfig = require("./user-config");
if (userConfig.getPath() == null) {
    userConfig.configPath()
}
window.dayOneJournalPath = userConfig.getPath();