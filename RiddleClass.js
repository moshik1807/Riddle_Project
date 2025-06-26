import promptSync from 'prompt-sync';
const prompt = promptSync();
export default function Riddel({id,name,taskDescription,correctAnswer}){
    this.id = id
    this.name = name
    this.taskDescription = taskDescription
    this.correctAnswer = correctAnswer
    this.ask = function (){
        let temp = true
        while(temp){
            const x = prompt(`${this.name}:${this.taskDescription}`)
            if (x === this.correctAnswer){
                temp = false
            }
        }
    }
}
