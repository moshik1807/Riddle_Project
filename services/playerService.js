import { readFile, writeFile } from 'node:fs/promises'
const path = '../texts/player.txt'
import * as x from '../texts/filesService.js'

export async function readAllPlayers(path){
   const riddles = await x.readText(path)
   console.log(riddles)
}

export async function cheakIfPlayerInText(path,player){
    const file = await readFile(path,"utf8")
    const players = JSON.parse(file)
    for (let i = 0; i < players.length; i++) {
        if (players[i].name === player.name) {
        return {exists: true, index: i}
        }
    }
    return { exists: false }
}

export async function addPlayer(path,player){   
     try{
        const players = await readFile(path,'utf8')
        const playersJson = JSON.parse(players)
        const cheak = await cheakIfPlayerInText(path,player)
        if(cheak.exists){
            for(let p of playersJson){
                if(p.name == player.name){
                    if(player.everegTime < p.everegTime){
                        playersJson.splice(cheak.index, 1)
                    }
                     else
                    {
                        return
                    }
                }
            }
        }
        let add = false
        for (let i = 0; i < playersJson.length; i++) {
            if (player.everegTime < playersJson[i].everegTime) {
                playersJson.splice(i, 0, player)
                add = true
                break
            }
        }
        if(!add){
            playersJson.push(player)
        }
        await writeFile(path, JSON.stringify(playersJson,null,2))
    }
    catch(err){
        console.log(err)
    }
}

 addPlayer(path,{"name":"moshe","everegTime":"001"})


// async function createPlayer(path,player){
//     const allPlayers = await readFile(path)
//     jsonPlayers = JSON.parse(allPlayers)
//     if(allPlayers[player]){
//         if(player.everegTime < allPlayers[player].everegTime){
//             allPlayers[player].everegTime = player.everegTime
//         }
//     }
// }
