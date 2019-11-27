const Poller = require('./Poller')
const Orders = require('./Orders')
const orders = new Orders()

class Main extends Poller {
    constructor(interval=1000, pnl=50000, intervalCurrent=5000){
        super()
        this.interval = interval
        this.intervalCurrent = intervalCurrent
        this.pnl = pnl
        this.printWelcomeMessage()
        this.printPnLPeriodically()
        this.onPoll(this.main)
    }

    printWelcomeMessage() {
        console.log('')
        console.log('Welcome to the Bitfinex Trader Bot')
        console.log('> Press P to check your PNL at any time')
        console.log('> Press Control+C to stop the bot')
        console.log('')
    }

    printPnLPeriodically(){
        const timeMs = this.intevalCurrent
        setInterval(() => this.printPnl(true), timeMs)
    }

    printMsg(msg) {
        const msgString = String(msg)
        console.log(msgString) //console.logs should be replaced by a logger
    }

    printOrders() {
        const ordersMsgs = orders.getOrdersMsgs()
        const isEmpty = !(Array.isArray(ordersMsgs) && ordersMsgs.length)
        if(isEmpty){
            this.printMsg("No orders placed")
        }else{
            ordersMsgs.forEach(order => {
                this.printMsg("Order: " + order)
            })
        }
    }

    async main() {
        const now = new Date()
        this.printMsg("\n"+now.toLocaleString())
        await orders.runTradingAlgorithm()
        await this.printOrders()
        this.poll()
    }
}

module.exports = Main
