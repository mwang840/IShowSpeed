import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing Embed',
    description: 'An embed will get sent to speed',
    slash: 'both',
    permissions:['ADMINISTRATOR'],

    callback : async({message, text })=>{
        const speedEmbed = new MessageEmbed().setDescription('Its Speed talking').setTitle('Speed').setColor('BLUE')
        return speedEmbed
    }
} as ICommand