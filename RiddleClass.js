import promptSync from 'prompt-sync';
const prompt = promptSync();
export default function Riddel({id,name,taskDescription,correctAnswer}){
    this.id = id
    this.name = name
    this.taskDescription = taskDescription
    this.correctAnswer = correctAnswer
    this.ask = function (){
        let x = prompt(`${this.name}:${this.taskDescription}`)
        while(x !== this.correctAnswer){
                 x = prompt(`${this.name}:${this.taskDescription}`)
            
        }
    }
}
