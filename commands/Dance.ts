import { Interaction } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'Speed flexing his moves',
    description: 'Speed started bussing down!',
    slash: 'both',
    testOnly: true,
    callback: ({})=>{
        return 'Speed did his thang, he bussed down'
    }
} as ICommand