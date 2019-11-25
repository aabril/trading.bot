const EventEmitter = require('events');
const readline = require('readline');

class Poller extends EventEmitter {
    constructor(interval = 1000) {
        super();
        this.interval = interval
        this.keyListener()
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
        setTimeout(() => this.emit('poll'), this.interval);
    }

    onPoll(cb) {
        const _cb = cb || this.cb;
        this.on('poll', _cb);
    }
}

module.exports = Poller