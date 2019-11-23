const EventEmitter = require('events');
const main = require('./main')
const msInterval = 1000
const pnl = 50000

class Poller extends EventEmitter {
    constructor(cb = ()=>{} , timeout = 100) {
        super();
        this.timeout = timeout
        this.pnl = pnl
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