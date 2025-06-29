import promptSync from 'prompt-sync';
const input = promptSync();
export default function Riddel(riddle){
    Object.assign(this,riddle)
    this.start = 0
    this.startTime = function(){
        this.start = new Date()
    }
    this.endTimer = function(player){
        let end = new Date()
        if (this.timer < end - this.start){
            console.log('Too slow! 5 seconds penalty applied.')
            player.times.push(end - this.start + 5000)
        }
        else{
            player.times.push(end - this.start)
        }
    }
    this.ask = function (){
        let result = input(`${this.name}:${this.taskDescription}`)
        while(result !== this.correctAnswer){
                 result = input(`${this.name}:${this.taskDescription}`)
            
        }
    }
}

