import { Interaction } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Testing Ping',
    description: 'Replies with a pong!',
    slash: true,
    testOnly: true,
    callback: ({message, interaction})=>{
        if(message){
            message.reply('Pong')   
        }

        if(interaction){
            message.reply('Pong')
        }
    }

} as ICommand