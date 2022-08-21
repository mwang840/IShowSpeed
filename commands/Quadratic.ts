import { ApplicationCommand, Options, CommandInteraction,  } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default{
    category: 'IShowSpeed decides to solve a quadratic equation',
    description: 'IShowSpeed finds out which x values make the formula zero',
    slash: 'both',
    //Set up quadratic options for a, b and c coefficients
    options:[
        {
            name: 'a',
            description: 'the coefficient for x^2',
            type: 'NUMBER',
            required: true
        },
        {
            name:'b',
            description:'the coefficient for x',
            type: 'NUMBER',
            required:true
        },
        {
            name:'c',
            description:'the C value',
            type:'NUMBER',
            required:true
        },

    ],
    testOnly:true,
    callback: ({message, interaction})=>{
        const result1 = interaction.options.getNumber('a') || 0;
        const result2 = interaction.options.getNumber('b') || 0;
        const result3 = interaction.options.getNumber('c') || 0;
        //Indicate for the negative and positive roots
        const negativeRoot = ((-1 * result2) - Math.sqrt((result2*result2) - (4 * result1 * result3)))/(2 * result1);
        const positiveRoot = ((-1 * result2) + Math.sqrt((result2*result2) - (4 * result1 * result3)))/(2 * result1);
        return `IShowSpeed solved the quadratic formula ${result1}x^2 + ${result2}x + ${result3} and got results of ${negativeRoot} and ${positiveRoot}`
    }
} as ICommand