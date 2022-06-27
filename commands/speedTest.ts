import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Testing IShowSpeeds patience',
    description: 'Testing IShowSpeeds patience',
    slash: 'both',
    testOnly: true,

    callback: async({interaction: msg})=>{
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId('Smile').setEmoji('Smile').setLabel('Confirm?').setStyle('PRIMARY')
        )
    }
} as ICommand