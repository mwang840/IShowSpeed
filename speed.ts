import DiscordJs, { Intents } from 'discord.js'
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
})

client.on('messageCreate', (message)=>{
    if(message.content === 'ping'){
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)