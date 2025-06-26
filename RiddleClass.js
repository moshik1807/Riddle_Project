import promptSync from 'prompt-sync';
const prompt = promptSync();
export default function Riddel({id,name,taskDescription,correctAnswer}){
    this.id = id
    this.name = name
    this.taskDescription = taskDescription
    this.correctAnswer = correctAnswer
    this.ask = function (){
        let result = prompt(`${this.name}:${this.taskDescription}`)
        while(result !== this.correctAnswer){
                 result = prompt(`${this.name}:${this.taskDescription}`)
            
        }
    }
}

