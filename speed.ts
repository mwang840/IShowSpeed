import DiscordJs, { CommandInteractionOptionResolver, Intents } from 'discord.js'
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
        description: 'Replies with Pong'
    })
})

client.on('interactionCreate', async(interaction)=>{
    if(!interaction.isCommand()){
        return
    }

    const {commandName, options} = interaction
    if(commandName === 'ping'){
        content: 'pong'
    }
})

client.login(process.env.TOKEN)