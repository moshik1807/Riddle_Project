export default class Player{
    constructor(name){
    this.name = name
    this.times = []
    }
    printTimes(){
        let sumTime = 0
        for(const time of this.times){
            sumTime += time
        }
        console.log(`total time:${sumTime/1000},average time:${sumTime/1000/this.times.length}`)
    }
}
