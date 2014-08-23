/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";

var gui = require('nw.gui');
var win = gui.Window.get();
if (process.platform == 'darwin') {
    var mb = new gui.Menu({type: "menubar"});
    mb.createMacBuiltin(require("../package.json").name);
    win.menu = mb;
}
var githubReaderMenu = new gui.Menu();
var openMenuItem = new gui.MenuItem({ label: 'Config DayOne Path' }).on("click", function () {
    require("../lib/user-config").configPath();
});
githubReaderMenu.append(openMenuItem);
win.menu.insert(new gui.MenuItem({ label: require("../package.json").name, submenu: githubReaderMenu}), 1);
win.setAlwaysOnTop(true);