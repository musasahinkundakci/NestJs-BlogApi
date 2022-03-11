import { BlogService } from "./blog.service";
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    addPost(req: any, res: any, title: string, content: string, description: string): Promise<import("./blog.model").Blog & {
        _id: any;
    }>;
    getPosts(): Promise<(import("./blog.model").Blog & {
        _id: any;
    })[]>;
}
