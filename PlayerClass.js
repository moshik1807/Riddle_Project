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
        let xx = 0
        for(const time of this.times){
            xx += time
        }
        console.log(`total time:${xx/1000},average time:${xx/1000/this.times.length}`)
    }
}
