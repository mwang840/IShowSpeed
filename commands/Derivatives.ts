import { ApplicationCommand, Options, CommandInteraction,  } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";
import derivative from "mathjs";
import math from "mathjs";

export default{
    category: 'IShowSpeed will help you solve the derivative of an equation',
    description: 'IShowSped will take the derivative of a math equation',
    slash: 'both',
    options:[
        {
            name: 'function',
            description: 'function being derived',
            type: 'STRING',
            required: true
        },
        {
            name: 'variable',
            description: 'the variable in which is differenciated',
            type: 'STRING',
            required: true
        },
        {
            name: 'simplify',
            description: 'Do you want to simplyfy the derivative',
            type: 'BOOLEAN',
            required:true
        }
    ],
    testOnly: true,
    callback: ({message, interaction})=>{
        const implement = interaction.options.getString('function') || '';
        const variable = interaction.options.getString('variable') || '';
        const simplified = interaction.options.getBoolean('simplify') || false;
        const derivative = math.derivative(implement, variable, {simplify: simplified});
        if(simplified === false){
            return `IShowSpeed took the derivative of ${implement}, derived to the variable ${variable} and the result was ${derivative}`
        }
        else{
            return `IShowSpeed took the derivative of ${implement}, derived to the variable ${variable} and the simplified result was ${derivative}`
        }
        
    }
}as ICommand