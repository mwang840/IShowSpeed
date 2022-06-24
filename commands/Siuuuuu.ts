import { Interaction } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Ronaldo voice from IShowSpeed',
    description: 'Replies with Siuuuuu!',
    slash: 'both',
    testOnly: true,
    callback: ({})=>{
        return 'Siuuuuu!'
    }
} as ICommand