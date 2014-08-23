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
editor.setValue(recorder.restore().pop());

// save
del.addEventListener(document.getElementById("save-button"), "click", function (event) {
    window.dayOne(textState.value(), ["memo"], function saved(error) {
        console.log(error);
    });
});