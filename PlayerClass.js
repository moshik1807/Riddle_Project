export default function Player(name){
    this.name = name
    this.times = []
    this.start = 0
    this.startTime = function(){
        this.start = new Date()
    }
    this.endTimer = function(){
        let end = new Date()
        this.times.push(end - this.start)
    }
    this.printTimes = function(){
        let sumTime = 0
        for(const time of this.times){
            sumTime += time
        }
        console.log(`total time:${sumTime/1000},average time:${sumTime/1000/this.times.length}`)
    }
}
