import { Request, Response } from "express";
import { insertCar, getCars, getCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handler";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR GETTING ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR GETTING ITEMS')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR UPDATING ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR POSTING ITEM', e)
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR DELETING ITEM')
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }