import { ButtonInteraction, MessageActionRow, MessageButton } from "discord.js";
import { Collection } from "mongoose";
import { ICommand } from "wokcommands";

export default {
    category: 'Enemies of IShowSpeed',
    description: 'People/Things that IShowSpeed hates will pop up when a button is clicked',
    slash: 'both',
    testOnly: true,

    callback: async({interaction: msgInit, channel})=>{
        const enemyRow = new MessageActionRow().addComponents(
            new MessageButton().setCustomId('Cupcake').setEmoji('🧁').setStyle('DANGER')
        ).addComponents(new MessageButton().setCustomId('Goofy Ahh').setEmoji('🤓').setStyle('DANGER')).addComponents((
            new MessageButton().setCustomId('Creep').setEmoji('👽').setStyle('DANGER')
        )).addComponents(new MessageButton().setCustomId('Messi').setEmoji('🇦🇷').setStyle('DANGER')).addComponents(
            new MessageButton().setCustomId('Talking Ben').setEmoji('🐶').setStyle('DANGER')
        )
        await msgInit.reply({
            content: 'Final decision',
            components: [enemyRow]
        })
    }

}as ICommand

