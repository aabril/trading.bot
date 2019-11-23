const fetch = require('node-fetch') 
const url = 'https://api-pub.bitfinex.com/v2/'
const pathParams = 'ticker/tBTCUSD'
const queryParams = ''

function parseTradingPairs(values) {
    const keys = [ "BID", "BID_SIZE", "ASK", "ASK_SIZE", "DAILY_CHANGE", "DAILY_CHANGE_PERC", "LAST_PRICE", "VOLUME", "HIGH", "LOW" ] 
    const result = {}
    keys.forEach((key, i) => result[key] = values[i]);
    return result
}

async function apiGetTicker() {
    try {
        const requestUrl = `${url}/${pathParams}?${queryParams}`
        const req = await fetch(requestUrl)
        return await req.json()
    } catch (err) {
        console.log(err)
    }
}

async function getTicker() {
   try {
        const response = await apiGetTicker()
        parseTradingPairs(response)
        const values = parseTradingPairs(response)
        console.log(`${JSON.stringify(values, null, 2)}`)
   } catch (err) {
       console.log(err)
   }
}

getTicker()