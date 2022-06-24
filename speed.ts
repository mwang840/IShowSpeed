import DiscordJs, { CommandInteractionOptionResolver, Intents, ApplicationCommandOptionType } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJs.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('GOD IS GOOD GOD IS GREAT GOD IS GOOD EHYYYYYYYYYYYYYYYYYYYYYYYYY');
    //guild commands only
    const guildID = '988560441200476261'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if(guild){
        commands = guild.commands
    }
    else{
        commands = client.application?.commands
    }

    commands?.create({
        name:'ping',
        description: 'Replies with Pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two integers',
        options: [{
            name: 'num1',
            description: 'First number to be added',
            required: true,
            type: DiscordJs.Constants.ApplicationCommandOptionTypes.NUMBER
        },
        {
            name: 'num2',
            description: 'Second number to be added',
            required: true,
            type: DiscordJs.Constants.ApplicationCommandOptionTypes.NUMBER
        }
        ]
    })
})

client.on('interactionCreate', async(interaction)=>{
    if(!interaction.isCommand()){
        return
    }

    const {commandName, options} = interaction
    if(commandName === 'ping'){
        interaction.reply({content: 'pong'})
    }
    else if(commandName === 'add'){
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!
        interaction.reply({
            content: `Total sum is ${num1 + num2}`
        })
    }
})

client.login(process.env.TOKEN)