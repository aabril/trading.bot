const EventEmitter = require('events');
const main = require('./main')
const msInterval = 1000
const pnl = 50000
const readline = require('readline');

class Poller extends EventEmitter {
    constructor(cb = ()=>{} , timeout = 100) {
        super();
        this.printWelcomeMessage()
        this.timeout = timeout
        this.pnl = pnl
        this.keyListener()
    }

    printWelcomeMessage() {
        console.log('')
        console.log('Welcome to the Bitfinex Trader Bot')
        console.log('> Press P to check your PNL at any time')
        console.log('> Press Control+C to stop the bot')
        console.log('')
    }

    keyListener() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c') {
                process.exit();
            } else {
                if(key.sequence === 'p') {
                    console.log(this.pnl)
                }
            }
        })
    }

    poll() {  
        setTimeout(() => this.emit('poll'), this.timeout);
    }

    onPoll(cb) {
        this.on('poll', cb);
    }
}

let poller = new Poller(main, msInterval)

poller.onPoll(async () => {
    await main()
    poller.poll(); // Go for the next poll
});

// Initialiser
poller.poll();