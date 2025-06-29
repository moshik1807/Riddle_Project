export default function Player(name){
    this.name = name
    this.times = []
    this.start = 0
    this.startTime = function(){
        this.start = new Date()
    }
    this.endTimer = function(riddleTimer){
        let end = new Date()
        if (riddleTimer<end - this.start){
            console.log('Too slow! 5 seconds penalty applied.')
            this.times.push(end - this.start+5000)
        }
        else{
            this.times.push(end - this.start)
        }
    }
    this.printTimes = function(){
        let sumTime = 0
        for(const time of this.times){
            sumTime += time
        }
        console.log(`total time:${sumTime/1000},average time:${sumTime/1000/this.times.length}`)
    }
}
