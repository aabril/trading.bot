function ticker(values) {
    const keys = [ "BID", "BID_SIZE", "ASK", "ASK_SIZE", "DAILY_CHANGE", "DAILY_CHANGE_PERC", "LAST_PRICE", "VOLUME", "HIGH", "LOW" ] 
    const result = {}
    keys.forEach((key, i) => result[key] = values[i]);
    return result
}

function candles(response) {
    const parsed = response.map((element) => {
        const keys = [   
            "MTS", // ms timestamp
            "OPEN",
            "CLOSE",
            "HIGH",
            "LOW",
            "VOLUME" 
        ] 
        const result = {}
        keys.forEach((key, i) => result[key] = element[i])
        result["MTS"] = new Date(result["MTS"])
        return result
    })
    return parsed
}

function books(response) {
    const results = []
    const respJSON = JSON.parse(response) // validation

    respJSON.forEach((arr, index) => {
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

module.exports = {
    ticker,
    books,
    candles
}