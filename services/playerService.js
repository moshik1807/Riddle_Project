import { readFile, writeFile } from 'node:fs/promises'
const path = '../texts/playrt.txt'
import * as x from '../texts/filesService.js'

export async function readAllPlayers(path){
   const riddles = await x.readText(path)
   console.log(riddles)
}

async function cheakIfPlayerInText(path,player){
    const players = await readFile(path)
    let bool = false
    for(const element of players){
        if(element.name == player.name){
            bool = true
        }
    }
    return bool
}