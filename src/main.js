const Poller = require('./Poller')

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

    main() {
        console.log(new Date())
        // TODO: Here the calls to ./src/bitfinex/* and the algorithm to place orders (print and sell)
        main.poll()
    }
}


const msInterval = 2000
const pnlInit= 40000

let main = new Main(msInterval, pnlInit)
main.main()

module.exports = Main
