"use strict"

const fetch = require('node-fetch')
const url = 'https://api-pub.bitfinex.com/v2/'

const pathParams = 'candles/trade:1m:tBTCUSD/hist' // Change these based on relevant path params. /last for last candle
const queryParams = '' // Change these based on relevant query params

function parseHistResponse(response) {
    const results = []
    response.forEach((arr, index) => {
        const keys = [   
            "MTS", // ms timestamp
            "OPEN",
            "CLOSE",
            "HIGH",
            "LOW",
            "VOLUME" 
        ] 
        const result = {}
        keys.forEach((key, i) => result[key] = arr[i]);
        result["MTS"] = new Date(result["MTS"])
        results.push(result)
        return
    });
    return results
}

async function getCandles() {
    try {
        const req = await fetch(`${url}/${pathParams}?${queryParams}`)
        const response = await req.json()
        const parsedResponse = parseHistResponse(response)
        console.log(`STATUS ${req.status} - ${JSON.stringify(parsedResponse, null, 2)}`)
    }
    catch (err) {
        console.log(err)
    }
}

getCandles()
module.exports = getCandles 