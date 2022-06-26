"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1["default"].Schema({
    message: {
        type: String,
        required: true
    }
});
exports["default"] = mongoose_1["default"].model('testing', schema, 'testing');
