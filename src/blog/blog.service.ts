import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { Blog } from "./blog.model";
@Injectable()
export class BlogService {
    constructor(@InjectModel("Blog") private readonly blogModel: Model<Blog>) { }
    async addBlog(title: string, description: string, content: string, userId: string) {
        const newBlog = new this.blogModel({ title, description, content, postedBy: userId })
        try {
            const res = await newBlog.save()
            return res
        }
        catch (e) {
            console.log(e)
        }
    }
    async getBlogs() {
        try {
            const blogs = await this.blogModel.find()
            if (blogs.length == 0) {
                throw new NotFoundException("Blog not found!")
            }
            return blogs
        } catch (error) {
            throw new Error("Something went wrong!")
        }
    }
}