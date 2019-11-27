const BitfinextApi = require('./bitfinex')
bitfinexApi = new BitfinextApi()

// #ToDo: No idea yet what would be a rational timespan, will check.
// const orderSettings = {
//     "amount": "0.003",
//     "timespan": "60000" // 1 minute 
// }

class Orders {
    constructor() {
        this.orders = []
    }

    placeBuy() {
        const order = {
            "order": "buy",
            "orderPrice": 7000,
            "amount": 1.53,
            "totalAmount": 10710,
            "pair": "BTCUSD"
        }
        this.orders.push(order)
    }

    placeSell() {
        const order = {
            "order": "sell",
            "orderPrice": 2000,
            "amount": 1.53,
            "totalAmount": 10710,
            "pair": "BTCUSD"
        }
        this.orders.push(order)
    }

    async runTradingAlgorithm() {
        // const candlesAPIResponse = await bitfinexApi.getCandles()
        // console.log(candlesAPIResponse)

        // const parser = await bitfinexApi.parser()
        // console.log(typeof parser)

        // const candles = parser.parsedCandlesResponse(candlesAPIResponse)
        // console.log(candles)
        // // const parsedCandles = bitfinexApi.parser().parseCandlesResponse(candles)
        // console.log(JSON.stringify(parsedCandles, null, 2))
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
        //mocking orders 
        this.placeBuy()
        this.placeSell()
        const msgs = this.formatMsgs()
        this.resetOrders()
        return msgs
    }
}

module.exports = Orders