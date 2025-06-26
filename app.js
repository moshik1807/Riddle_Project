import promptSync from 'prompt-sync';
const prompt = promptSync();
import * as importFile from './imports.js'

function creatRiddleObj(arrayRiddle){
    const bewArrayRiddle = arrayRiddle.map(r => new importFile.Riddel(r))
    return bewArrayRiddle
}
const readyRiddle = creatRiddleObj(importFile.ridd)

const PlayerName = prompt('enter your name: ')
const player = new importFile.Player(PlayerName)

function Game(arrayRiddle,player){
    for (const ridd of arrayRiddle){
        player.startTime()
        ridd.ask()
        player.endTimer()
    }
    player.printTimes()
}

Game(readyRiddle,player)