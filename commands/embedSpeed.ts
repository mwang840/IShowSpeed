import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing Embed',
    description: 'An embed will get sent to speed',
    slash: 'both',
    permissions:['ADMINISTRATOR'],

    callback : async({message, text })=>{
        const theJson = JSON.parse(text)
        const theEmbed = new MessageEmbed(theJson)
        return theEmbed
    }
} as ICommand