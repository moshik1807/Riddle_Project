import {readFile,stat,readdir} from "node:fs/promises"
import { resolve } from "node:path"

const path = resolve('./', 'riddels/riddles.txt')

export default async function readText(){
    try{
        const file = await readFile(path,'utf8')
        const fileJson = JSON.parse(file)
        return fileJson
    }
    catch(err){
        console.log(err)
    }
}



