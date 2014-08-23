/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var DayOne = require('dayone').DayOne;
var DayOneEntry = require('dayone').DayOneEntry;
var prevText;
module.exports = function (text, tags, callback) {
    console.log(text);
    if (prevText === text) {
    }
    prevText = text;
    // Basic entry
    var entry = new DayOneEntry();
    entry.creationDate = new Date();
    entry.text = text;
    entry.tags = tags;
    //        return callback(new Error("duplicate text"))
    var dayone = new DayOne();
    dayone.save(entry, function (error) {
        callback(error);
    })
};