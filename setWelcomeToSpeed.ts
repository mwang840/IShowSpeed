import {ICommand} from "wokcommands";
import DJS from "discord.js";

export default{
    category: "configuration",
    description: "Sets the welcome channel",

    permissions: ['ADMINISTRATOR'],
    miniArgs: 2,
    expectedArgs: '<channel><text>',
    slash: 'both',
    testOnly: true,

    options: [
        {
            name: 'channel',
            description: 'Target Channel',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        },
        {
            name: 'text',
            description: 'Welcome Message',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.STRING
        }
    ],
    callback: async({guild, message, interaction, args})=>{
        if(!guild){
            return 'Use this command within this server! Thank you!'
        }
        const targeted = message ? message.mentions.channels.first() : interaction.options.getChannel('channel')
    }
} as ICommand