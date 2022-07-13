import mongoose, {Schema} from "mongoose";

const requiredString = {
    type: String,
    required: true
}

const welcomeToServer = new Schema({
    _id: requiredString,
    channelId: requiredString,
    text: requiredString
})

const name = 'welcome-to-server'

export default mongoose.models[name] || mongoose.model(name, welcomeToServer, name)