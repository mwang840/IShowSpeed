import { ButtonInteraction, MessageActionRow, MessageButton } from "discord.js";
import { Collection } from "mongoose";
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
            new MessageButton().setCustomId('Frown').setEmoji('😒').setLabel('Confirm?').setStyle('DANGER')
        )

        const speedYt = new MessageActionRow().addComponents(
            new MessageButton().setURL('https://www.youtube.com/c/IShowSpeed').setLabel('See speed?').setStyle("LINK")
        )

        await msgInt.reply({
            content: 'Final decision',
            components: [row, speedYt]
        })

        const filter = (btnInter: ButtonInteraction) => {
            return msgInt.user.id === btnInter.user.id
        }
        //Button is clicked
        const collector = channel.createMessageComponentCollector({
            filter: filter.arguments,
            max: 1,
            time: 1000 * 10
        })
        //Waits for a collection
        collector.on('collect', (i: ButtonInteraction)=>{
            i.reply({
                content: 'This button is clicked'
            })
        })
        //Collection is received
        collector.on('end', async (collection)=>{
            collection.forEach((click)=>{
                console.log(click.user.id, click.customId)
            })
            if(collection.first()?.customId === 'smile'){
                //smile
            }
        })

        await msgInt.editReply({
            content: 'Speed has taken action',
            components: []
        })
    }
} as ICommand