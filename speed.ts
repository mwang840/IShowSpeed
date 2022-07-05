import DiscordJs, { CommandInteractionOptionResolver, Intents, ApplicationCommandOptionType } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import testSchema from './test-scheme'
dotenv.config()

const client = new DiscordJs.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', async () => {
    await mongoose.connect(process.env.MONGO_URI || '', {
        keepAlive: true
    })
    
    
    console.log('GOD IS GOOD GOD IS GREAT GOD IS GOOD EHYYYYYYYYYYYYYYYYYYYYYYYYY');
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['988560441200476261', '807039720269021204'],
        mongoUri:  process.env.MONGO_URI
    })
    setTimeout(async ()=>{
        await new testSchema({
            message: 'hello there'
        }).save()
    }, 1000)
})

client.login(process.env.TOKEN)