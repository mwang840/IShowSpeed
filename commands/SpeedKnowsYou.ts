import { Interaction, Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Speeds knowledge of users',
    description: 'Does IShowSpeed know you?',
    slash: 'both',
    testOnly: true,
    callback: ({ interaction, message, channel })=>{
        interaction.reply('Ayo, speed needs to know you, whats your name?')

        const filter = (m: Message)=>{
            return m.author.id === message.author.id
        }

        const collector = channel.createMessageCollector({
            filter,
            max: 2,
            time: 1000 * 5
        })

        collector.on('collect', interaction=>{
            console.log(interaction.content)
        })

        collector.on('end', collected =>{
            if(collected.size === 0){
                interaction.reply('Bruh Speed aint know you since you did not enter in something')
                return
            }

            let text = 'Collected: \n\n'

            collected.forEach((interaction)=>{
                text += `${interaction.content}\n`
            })

            interaction.reply(text)
        })

    }

    


} as ICommand