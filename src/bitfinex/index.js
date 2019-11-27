const fetch = require('node-fetch')
const parser = require('./parser')

class BitfinexApiFetcher {
    constructor(){
        this.url = 'https://api-pub.bitfinex.com/v2/'
        this.queryParams = ''
        this.parser = parser
    }

    getRequestUrl(pathParams) {
        const requestUrl = `${this.url}/${pathParams}?${this.queryParams}`
        return requestUrl
    }

    async getTicker() {
        try {
            const requestUrl = this.getRequestUrl('ticker/tBTCUSD')
            const req = await fetch(requestUrl)
            return await req.json()
        } catch (err) {
            console.log(err)
        }
    }

    async getBooks() {
        try {
            const requestUrl = this.getRequestUrl('book/tBTCUSD/P0')
            const req = await fetch(requestUrl)
            return await req.json()
        } catch (err) {
            console.log(err)
        }
    }

    async getCandles() {
        try {
            const requestUrl = this.getRequestUrl('candles/trade:1m:tBTCUSD/hist')
            const req = await fetch(requestUrl)
            return await req.json()
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = BitfinexApiFetcher