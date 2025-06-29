import promptSync from 'prompt-sync';
const prompt = promptSync();
import * as importFile from './imports.js'


function creatRiddleObj(arrayRiddle){
    const bewArrayRiddle = arrayRiddle.map(r => new importFile.Riddel(r))
    return bewArrayRiddle
}


function riddleByLevel(readyRiddle){
    const level = prompt("enter vevel:easy,medium,or hard  ")
    const arrayRiddle = readyRiddle.filter((riddle)=> riddle.level == level)
    return arrayRiddle
}


function Game(arrayRiddle,player){
    for (const ridd of arrayRiddle){
        player.startTime()
        ridd.ask()
        player.endTimer(ridd.timer)
    }
    player.printTimes()
}


const readyRiddle = creatRiddleObj(importFile.ridd)
const RiddleByLevel = riddleByLevel(readyRiddle)
const PlayerName = prompt('enter your name: ')
const player = new importFile.Player(PlayerName)
Game(RiddleByLevel,player)