import { ApplicationCommand, CommandInteraction, Interaction, Options } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default{
    category: 'IShowSpeed does basic math',
    description: 'IShowSpeed subtracts numbers (integers)',
    slash: 'both',
    options: [
        {
            name: 'first_number',
            description: 'This is the first number being subtracted',
            type: 'NUMBER',
            required: true
        },
        {
            name: 'second_number',
            description: 'The second number being subtracted',
            type: 'NUMBER',
            required: true
        }
    ],
    testOnly: true,
    callback: ({message, interaction}) => {
        const number1 = interaction.options.getNumber('first_number') || 0
        const number2 = interaction.options.getNumber('second_number') || 0
        console.log(number1 - number2)
        return `IShowSpeed subtracted ***${number1}*** and ***${number2}*** and got ${number1 - number2}`
    }
} as ICommand