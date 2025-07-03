import {readFile,writeFile} from "node:fs/promises"
import { resolve } from "node:path"
const path = resolve('./', 'riddels/riddles.txt')
import readline from 'node:readline';

export async function readText(){
    try{
        const file = await readFile(path,'utf8')
        const fileJson = JSON.parse(file)
        return fileJson
    }
    catch(err){
        console.log(err)
    }
}



export async function creatRiddle(path,obj){
    try{
        const file = await readFile(path,'utf8')
        const fileJson = JSON.parse(file)
        fileJson.push(obj)
        await writeFile("riddles.txt", JSON.stringify(fileJson,null,2))
    }
    catch(err){
        console.log(err)
    }
}

creatRiddle('./riddles.txt',{id:444,name:"bbbbb"})