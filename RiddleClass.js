import promptSync from 'prompt-sync';
const prompt = promptSync();
export default function Riddel({id,level,name,taskDescription,correctAnswer,timer}){
    this.id = id
    this.level = level
    this.name = name
    this.taskDescription = taskDescription
    this.correctAnswer = correctAnswer
    this.timer = timer
    this.ask = function (){
        let result = prompt(`${this.name}:${this.taskDescription}`)
        while(result !== this.correctAnswer){
                 result = prompt(`${this.name}:${this.taskDescription}`)
            
        }
    }
}

