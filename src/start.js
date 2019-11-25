const Main = require('./Main')

const MSINTERVAL = process.env.MSINTERVAL || 2000
const PNLINIT= process.env.PNLINIT || 40000
const MSINTERVALCURRENT = process.env.PNLINIT || 6000

let main = new Main(MSINTERVAL, PNLINIT, MSINTERVALCURRENT)
main.main()