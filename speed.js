"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
var path_1 = require("path");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var client = new discord_js_1["default"].Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', function () {
    console.log('GOD IS GOOD GOD IS GREAT GOD IS GOOD EHYYYYYYYYYYYYYYYYYYYYYYYYY');
    new wokcommands_1["default"](client, {
        commandDir: path_1["default"].join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['988560441200476261']
    });
});
client.login(process.env.TOKEN);
