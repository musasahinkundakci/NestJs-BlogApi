import * as mongoose from "mongoose"

export const BlogSchema = new mongoose.Schema({
    title: { required: true, type: String },//javascript type
    description: { required: true, type: String },
    content: { required: true, type: String },
    postedBy: { required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: {
        type: Date,
        default: Date.now
    },

})

export interface Blog extends mongoose.Document {
    id: string
    title: string//type script type
    content: string
    description: string
    postedBy: string

} 