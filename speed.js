"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var _a;
    console.log('GOD IS GOOD GOD IS GREAT GOD IS GOOD EHYYYYYYYYYYYYYYYYYYYYYYYYY');
    //guild commands only
    var guildID = '988560441200476261';
    var guild = client.guilds.cache.get(guildID);
    var commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'ping',
        description: 'Replies with Pong.'
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'add',
        description: 'Adds two integers',
        options: [{
                name: 'num1',
                description: 'First number to be added',
                required: true,
                type: discord_js_1["default"].Constants.ApplicationCommandOptionTypes.INTEGER
            },
            {
                name: 'num2',
                description: 'Second number to be added',
                required: true,
                type: discord_js_1["default"].Constants.ApplicationCommandOptionTypes.INTEGER
            }
        ]
    });
});
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var commandName, options, num1, num2;
    return __generator(this, function (_a) {
        if (!interaction.isCommand()) {
            return [2 /*return*/];
        }
        commandName = interaction.commandName, options = interaction.options;
        if (commandName === 'ping') {
            interaction.reply({ content: 'pong' });
        }
        else if (commandName === 'add') {
            num1 = options.getNumber('num1');
            num2 = options.getNumber('num2');
            interaction.reply({
                content: "Total sum is ".concat(num1 + num2)
            });
        }
        return [2 /*return*/];
    });
}); });
client.login(process.env.TOKEN);
