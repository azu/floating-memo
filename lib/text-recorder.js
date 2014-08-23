/**
 * Created by azu on 2014/08/23.
 * LICENSE : MIT
 */
"use strict";
var _ = require("lodash");
function createStack(defaultArray, limit) {
    var _stack = defaultArray || [];
    return {
        add: function add(value) {
            if (_stack.length <= limit) {
                _stack.push(value)
            }
        },
        toArray: function () {
            return _stack;
        }
    };
}
module.exports = function (state) {
    state(_.debounce(record, 1000));
    var stack = createStack(restore(), 100);

    function record(current) {
        stack.add(current.value);
        save();
    }

    function restore() {
        var item = localStorage.getItem("text-recorder");
        if (item) {
            return JSON.parse(item);
        } else {
            return [];
        }
    }

    function save() {
        localStorage.setItem("text-recorder", JSON.stringify(stack.toArray()));
    }

    return {
        save: save,
        restore: restore
    }
};