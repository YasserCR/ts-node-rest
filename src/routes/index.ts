import { Router } from 'express';
import { readdirSync } from "fs"

const PATH_ROUTHER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTHER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading route ... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }