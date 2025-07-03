const path = '../texts/riddles.txt'
import * as x from '../texts/riddleServic.js'
import promptSync from 'prompt-sync';
const readline = promptSync();

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("for read all reddles pres 1")
console.log("for creat riddle pres 2")


 r.question("enter new object ", (answer) => {
    let newObj;
    newObj = JSON.parse(answer)
    r.close();
 })


function read(){
   x.readText(path)
}

function addRiddle(){
    newRiddle = {}
    newRiddle[level] = readline("enter level")
    newRiddle[name] = readline("enter name")
    newRiddle[taskDescription] = readline("enter taskDescription")
    newRiddle[correctAnswer] = readline("enter correctAnswer")
    newRiddle[timer] = readline("enter timer")
    newRiddle[hint] = readline("enter hint")
    x.creat(path,newRiddle)
}