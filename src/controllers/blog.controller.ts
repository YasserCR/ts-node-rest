import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR GETTING BLOG')
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR GETTING BLOGS')
    }
}

const updateBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR UPDATING BLOG')
    }
}

const postBlog = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, 'ERROR POSTING BLOG')
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR DELETING BLOG')
    }
}

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog }