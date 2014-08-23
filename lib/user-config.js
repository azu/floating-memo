/**
 * Created by azu on 2014/08/24.
 * LICENSE : MIT
 */
"use strict";

module.exports = {
    configPath: function () {
        var value = global.window.prompt("Please input your /path/to/Day One/Journal.dayone\n" +
                "e.g.) /Users/azu/Dropbox/App/Day One/Journal.dayone",
            "~/Dropbox/App/Day One/Journal.dayone"
        );
        this.savePath(value);
    },
    savePath: function (path) {
        global.window.localStorage.setItem("dayone-journal-filepath", path);
    },
    getPath: function () {
        return global.window.localStorage.getItem("dayone-journal-filepath");
    }
};