const BitfinextApi = require('./bitfinex')
bitfinexApi = new BitfinextApi()

// #ToDo: No idea yet what would be a rational timespan, will check.
const orderSettings = {
    "buyDiffAmount": "40",
    "sellDiffAmount": "40",
    "timespan": "60000" // 1 minute 
}

class Orders {
    constructor() {
        this.orders = []
    }

    placeBuy() {
        const order = {
            "order": "buy",
            "orderPrice": 0,
            "amount": 0,
            "totalAmount": 0,
            "pair": "BTCUSD"
        }
        this.orders.push(order)
    }

    placeSell() {
        const order = {
            "order": "sell",
            "orderPrice": 0,
            "amount": 0,
            "totalAmount": 0,
            "pair": "BTCUSD"
        }
        this.orders.push(order)
    }

    async runTradingAlgorithm() {
        const candlesAPIResponse = await bitfinexApi.getCandles()
        const candles = bitfinexApi.parser.candles(candlesAPIResponse)

        const lastIndex = candles.length-1

        const firstItem = candles[0]
        const lastItem = candles[lastIndex]

        const buyDiff = firstItem.OPEN - lastItem.OPEN
        if(buyDiff>orderSettings.buyDiffAmount){
            this.placeBuy()
        }

        const sellDiff = firstItem.OPEN - lastItem.OPEN
        if(sellDiff>orderSettings.sellDiffAmount){
            this.placeSell()
        }
    }

    resetOrders() {
        this.orders = []
    }

    formatMsgs() {
        const msgs = this.orders.map((element) => {
            const msg = `${element.order} ${element.amount} ${element.pair.substring(0,3)} at price of ${element.orderPrice} ${element.pair.substring(3,3)}. Total amount: ${element.amount}`
            return msg
        })
        return msgs
    }

    getOrdersMsgs() {
        // this.placeBuy() //mocking orders
        // this.placeSell() //mocking orders
        const msgs = this.formatMsgs()
        this.resetOrders()
        return msgs
    }
}

module.exports = Orders