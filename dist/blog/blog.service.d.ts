import { Model } from "mongoose";
import { Blog } from "./blog.model";
export declare class BlogService {
    private readonly blogModel;
    constructor(blogModel: Model<Blog>);
    addBlog(title: string, description: string, content: string, userId: string): Promise<Blog & {
        _id: any;
    }>;
    getBlogs(): Promise<(Blog & {
        _id: any;
    })[]>;
}
