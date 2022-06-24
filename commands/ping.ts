import { Interaction } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Testing Ping',
    description: 'Replies with a pong!',
    slash: 'both',
    testOnly: true,
    callback: ({})=>{
        return 'Pong!'
    }

} as ICommand