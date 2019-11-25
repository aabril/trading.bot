const Poller = require('./Poller')
const Orders = require('./Orders')
const orders = new Orders()

class Main extends Poller {
    constructor(interval=1000, pnl=50000){
        super()
        this.interval = interval
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

    printPnLPeriodically(timeMs=4000){
        setInterval(() => this.printPnl(true), timeMs)
    }

    printMsg(msg) {
        const msgString = String(msg)
        console.log(new Date())
        console.log(msgString) //console.logs should be replaced by a logger
    }

    main() {
        console.log(new Date())
        const ordersMsgs = orders.getOrdersMsgs()
        ordersMsgs.forEach(order => {
            console.log(order)
            this.printMsg("Order: " + order)
        });
        this.poll()
    }
}

module.exports = Main
