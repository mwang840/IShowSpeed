import { ButtonInteraction, Interaction, MessageActionRow, MessageButton } from "discord.js";
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
        ).addComponents(new MessageButton().setCustomId('Goofy_Ahh').setEmoji('🤓').setStyle('DANGER')).addComponents(new MessageButton().setCustomId('Messi').setEmoji('🇦🇷').setStyle('DANGER')).addComponents(
            new MessageButton().setCustomId('Talking_Ben').setEmoji('🐶').setStyle('DANGER')
        )
        await msgInit.reply({
            content: 'Enemies only',
            components: [enemyRow]
        })

        //Interaction to the buttons
        const filter = (btnInter: ButtonInteraction) => {
            return msgInit.user.id === btnInter.user.id
        }

        const response = channel.createMessageComponentCollector({
            filter:filter.arguments,
            max: 1,
            time: 1000 * 15
        })
        response.on('collect', (i: ButtonInteraction)=>{
            i.reply({
                content: 'This button is clicked'
            })
        })

        //Collection is received
        response.on('end', async (collection)=>{
            collection.forEach((click)=>{
                console.log(click.user.id, click.customId)
            })
            if(collection.first()?.customId === 'Cupcake'){
                await msgInit.editReply({
                    files:[
                        {
                            attachment: `${__dirname}}../../../../../Assets/enemies/thePredator.jpg`,
                            name: 'thePredator.jpg'
                        }
                    ]
                })
            }
            else if(collection.first()?.customId === 'Goofy_Ahh'){
                await msgInit.editReply({
                    files:[
                        {
                            attachment: `${__dirname}}../../../../../Assets/enemies/quandale.jpg`,
                            name: 'quandale.jpg'
                        }
                    ]
                })
            }
            else if(collection.first()?.customId === 'Messi'){
                await msgInit.editReply({
                    files:[
                        {
                            attachment: `${__dirname}}../../../../../Assets/enemies/talkingBen.jpg`,
                            name: 'talkingBen.jpg'
                        }
                    ]
                })
            }
        })
        
    }

}as ICommand

