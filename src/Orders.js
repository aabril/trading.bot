class Orders {
    constructor() {
        this.orders = [
            {
                "order": "buy",
                "orderPrice": 7000,
                "amount": 1.53,
                "totalAmount": 10710,
                "pair": "BTCUSD"
            }
        ]
    }

    getOrdersMsgs() {
        const msgs = []
        this.orders.forEach(element => {
            let msg = `${element.order} ${element.amount} ${element.pair.substring(0,3)} at price of ${element.orderPrice} ${element.pair.substring(3,3)}. Total amount: ${element.amount} }`
            msgs.push[msg]
        });
        return msgs
    }
}

module.exports = Orders