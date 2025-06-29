import promptSync from 'prompt-sync';
const input = promptSync();
export default function Riddel(riddle){
    Object.assign(this,riddle)
    this.start = 0
    this.GetHint = false
    this.addTime = 0
    this.startTime = function(){
        this.start = new Date()
    }
    this.endTime = function(player){
        let end = new Date()
        if (this.timer < end - this.start){
            console.log('Too slow! 5 seconds penalty applied.')
            this.addTime += 5000
        }
        if (this.GetHint){
            this.addTime += 5000
        }
        player.times.push(end - this.start + this.addTime)
    }
    this.ask = function (){
        let result = input(`${this.name}:${this.taskDescription},To get a hint, type a hint. `)
        while(result !== this.correctAnswer){
                if(result == "hint"){
                    this.GetHint = true
                    console.log(this.hint)
                }
                result = input(`${this.name}:${this.taskDescription},To get a hint, type a hint. `)
            
        }
    }
}

