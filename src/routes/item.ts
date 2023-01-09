import { Request, Response, Router } from "express"
import {
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem
} from "../controllers/item.controller"

const router = Router()

router.get("/:id", getItem);

router.get("/", getItems);

router.post("/", postItem);

router.get("/:id", updateItem);

router.get("/:id", deleteItem);


export { router }