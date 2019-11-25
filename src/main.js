const Poller = require('./Poller')
const orders = require('./Orders')

class Main extends Poller {
    constructor(interval=1000, pnl=50000){
        super()
        this.interval = interval
        this.pnl = pnl
        this.printWelcomeMessage()
        this.onPoll(this.main)
    }

    printWelcomeMessage() {
        console.log('')
        console.log('Welcome to the Bitfinex Trader Bot')
        console.log('> Press P to check your PNL at any time')
        console.log('> Press Control+C to stop the bot')
        console.log('')
    }

    printMsg(msg) {
        const msgString = String(msg)
        console.log(msgString) //console.logs should be replaced by a logger
    }

    main() {
        // const orders = getOrders(pnl)
        const ordersMsgs = ['Buy 1.324 BTC at price of 7000 USD. Total amount: 11111 USDs']
        console.log(new Date())
        ordersMsgs.forEach(order => {
            this.printMsg("Order: " + order)
        });
        this.poll()
    }
}

module.exports = Main
