"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
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
    //guild commands only
    var guildID = '988560441200476261';
    var guild = client.guilds.cache.get(guildID);
});
client.on('messageCreate', function (message) {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        });
    }
});
client.login(process.env.TOKEN);
