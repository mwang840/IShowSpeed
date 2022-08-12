import { ApplicationCommand, CommandInteraction, Interaction, Options } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default{
    category:'IShowSpeed does basicMath',
    description: 'IShowSpeed subtracts numbers (integers)',
    slash: 'both',
    options:[
        {
            name: 'the-number',
            description: 'The number thats being square rooted',
            type: 'NUMBER',
            required:true
        }
    ],
    testOnly:true,
    callback:({message, interaction})=>{
        const theNumber = interaction.options.getNumber('the-number') || 0;
        return `IShowSpeed took the square root of ${theNumber} and got ${Math.sqrt(theNumber)} as the answer`
    }
} as ICommand