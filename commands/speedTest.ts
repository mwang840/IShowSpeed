import { ButtonInteraction, MessageActionRow, MessageButton } from "discord.js";
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

        const filter = (btnInt: ButtonInteraction) => {
            return msgInt.user.id === btnInt.user.id
        }

        const receivedMessage = channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000
        })
    }
} as ICommand