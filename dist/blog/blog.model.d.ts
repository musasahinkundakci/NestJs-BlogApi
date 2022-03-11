import * as mongoose from "mongoose";
export declare const BlogSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface Blog extends mongoose.Document {
    id: string;
    title: string;
    content: string;
    description: string;
    postedBy: string;
}
