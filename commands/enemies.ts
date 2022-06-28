import { ApplicationCommand, Options, CommandInteraction } from "discord.js";
import { ApplicationCommandOptionData } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'IShowSpeeds Enemies',
    description: 'Enter in an hater name ',
    slash: 'both',
    options: [
        {
            name: 'Enemy',
            description: 'Someone that speed dislikes',
            type: 'STRING',
            required: true
        }
    ],
    testOnly: true
} as ICommand