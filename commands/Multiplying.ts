import { ApplicationCommand, Options, CommandInteraction,  } from "discord.js";
import { ApplicationCommandOptionData } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'IShowSpeed does basic math',
    description: 'IShowSpeed multiplies numbers (integers)',
    slash: 'both',
    options:
    [
        {
            name:'first_number',
            description: 'This is the first number being multiplied',
            type: 'NUMBER',
            required: true
        },
        {
            name: 'second_number',
            description: 'This is the second number being multiplied',
            type: 'NUMBER',
            required: true
        }
    ],
    testOnly: true,
    callback: ({message, interaction}) => {
        const number1 = interaction.options.getNumber('first_number') || 0
        const number2 = interaction.options.getNumber('second_number') || 0
        return `IShowSpeed multiplied ***${number1}*** and ***${number2}*** and got ${number1 * number2}`
    }
} as ICommand