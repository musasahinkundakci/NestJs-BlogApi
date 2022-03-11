import { Controller, Get, Post, Patch, Body, Req, Res, Next } from "@nestjs/common";
import { BlogService } from "./blog.service";

@Controller("blog")
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Post()
    async addPost(
        @Req() req: any,
        @Res() res: any,
        @Body("title") title: string,
        @Body("content") content: string,
        @Body("description") description: string
    ) {
        if (req.session.user) {
            let _id = req.session.user._id
            return await this.blogService.addBlog(title, content, description, _id)

        }
        else {
            res.json("You are not authorized!");
        }
    }
    @Get()
    async getPosts() {
        return await this.blogService.getBlogs()
    }
}