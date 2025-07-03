import { readFile, writeFile } from 'node:fs/promises'
const path = '../texts/riddles.txt'
import * as x from '../texts/riddleServic.js'
import promptSync from 'prompt-sync'
const prompt = promptSync()

async function readAllRiddles(path){
   const riddles = await x.readText(path)
   console.log(riddles)
}

function addRiddle(path){
    const newRiddle = {}
    newRiddle["level"] = prompt("enter level")
    newRiddle["name"] = prompt("enter name")
    newRiddle["taskDescription"] = prompt("enter taskDescription")
    newRiddle["correctAnswer"] = prompt("enter correctAnswer")
    newRiddle["timer"] = prompt("enter timer")
    newRiddle["hint"] = prompt("enter hint")
    x.creat(path,newRiddle)
}

async function updeatRid(path){
    const objById = prompt("enter id riddle you whant to change")
    let y = await x.readText(path)
    for (let element of y){
        if(element.id == objById){
            const newTaskDescription =  prompt("enter taskDescription updeat")
            const newCorrectAnswer = prompt("enter correctAnswer updeat")
            const newHint = prompt("enter hint updeat")
            element.taskDescription = newTaskDescription
            element.correctAnswer = newCorrectAnswer
            element.hint = newHint
        }
    }
    await writeFile(path, JSON.stringify(y,null,2))
}

function deletRiddle(path){
    const objById = prompt("enter id object to you whant delet")
    x.delet(path,objById)
}
