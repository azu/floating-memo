/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var DayOne = require('dayone').DayOne;
var DayOneEntry = require('dayone').DayOneEntry;
var prevText;
module.exports = function (text, tags, callback) {
    if (prevText === text) {
        return callback(new Error("duplicate text"))
    }
    prevText = text;
    // Basic entry
    var gui = global.window.nwDispatcher.requireNwGui();
    var win = gui.Window.get();
    var dayone;
    if(win.dayOneJournalPath) {
        dayone = new DayOne({
            directory: global.window.dayOneJournalPath
        });
    }else{
        dayone = new DayOne();
    }
    var entry = new DayOneEntry();
    entry.creationDate = new Date();
    entry.text = text;
    entry.tags = tags;
    dayone.save(entry, function (error) {
        if (typeof callback === "function") {
            callback(error);
        }
    })
};