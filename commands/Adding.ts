import { ApplicationCommand, CommandInteraction, Interaction, Options } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default{
    category: 'IShowSpeed does basic math',
    description: 'IShowSpeed adds numbers (integers)',
    slash: 'both',
    options: [
        {
            name: 'first',
            description: 'This is the first number being added',
            type: 'NUMBER',
            required: true
        },
        {
            name: 'second',
            description: 'The second number being added',
            type: 'NUMBER',
            required: true
        }
    ],
    testOnly: true,
    callback: (interaction: CommandInteraction) => {
        const number1 = interaction.options.getNumber('first') ?? 0
        const number2 = interaction.options.getNumber('second') ?? 0

        return `Speed added ${number1} and ${number2} and got ${number1 + number2}`
    }
} as unknown as ICommand