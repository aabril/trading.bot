"use strict"

const fetch = require('node-fetch')
const url = 'https://api-pub.bitfinex.com/v2/'
const pathParams = 'book/tBTCUSD/P0' // Change these based on relevant path params. /last for last candle
const queryParams = '' // Change these based on relevant query params

async function getBooks() {
    try {
        const req = await fetch(`${url}/${pathParams}?${queryParams}`)
        const response = await req.json()
        const values = parseBooksResponse(response)
        console.log(`${JSON.stringify(values, null, 2)}`)
    } catch (err) {
        console.log(err)
    }
}

function parseBooksResponse(response) {
    const results = []
    response.forEach((arr, index) => {
        const keys = [   
            "PRICE",
            "COUNT",
            "AMOUNT"
        ] 
        const result = {}
        keys.forEach((key, i) => result[key] = arr[i]);
        results.push(result)
        return
    });
    return results
}

getBooks()
module.exports = getBooks 