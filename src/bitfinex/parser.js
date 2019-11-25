function parseTickerResponse(values) {
    const keys = [ "BID", "BID_SIZE", "ASK", "ASK_SIZE", "DAILY_CHANGE", "DAILY_CHANGE_PERC", "LAST_PRICE", "VOLUME", "HIGH", "LOW" ] 
    const result = {}
    keys.forEach((key, i) => result[key] = values[i]);
    return result
}

function parseCandlesResponse(response) {
    const results = []
    const respJSON = JSON.parse(response) // validation

    respJSON.forEach((arr, index) => {
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
    });
    return results
}

function parseBooksResponse(response) {
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
    parseTickerResponse,
    parseBooksResponse,
    parseCandlesResponse
}