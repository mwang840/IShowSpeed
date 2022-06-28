import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Testing IShowSpeeds patience',
    description: 'Testing IShowSpeeds patience',
    slash: 'both',
    testOnly: true,

    callback: async({interaction: msgInt, channel})=>{
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId('Smile').setEmoji('😊').setLabel('Confirm?').setStyle('SUCCESS')
        ).addComponents(
            new MessageButton().setCustomId('Frown').setEmoji('😒').setLabel('Confirm?').setStyle('SUCCESS')
        )

        await msgInt.reply({
            content: 'Final decision',
            components: [row]
        })
    }
} as ICommand