# Bitfinex Trading Bot

Bitfinext Trading Bot is meant to be an interactive tool for trading CryptoCurrencies pairs on the Bitfinex platform, based from a initial amount, and focused on a customisable algorithm to achieve a performant PnL.

# Done

• Implemented a Pool System to be listening from the keyboard and from the API calls
• Keyboard listener from the STDIN
• Bitfinex API consumer: books, candlesa and ticker
• Terminal output in the Pooler parent class
• Welcome display (just fancier)

# ToDo

• Tests 
• Trading algorithm

# Performance tips

List of possible perfomances that could improve the code:

• Bitfinex API have websockets and could be key for performance (I need to read docs for this)
• Locally in this code, the use of buffers could be also benefitial.
• API responses had been formatted from raw arrays to objects for human-readable reasons
• With more time and familiarised with the API, better using it without the formatting
• Proper tests could avoid errors and therefore avoid possible perf issues
• The Use of typescript could be considered too.

• By default I usually don't use ES6 classes, but sometimes could be benefitials when handling data
• Since the EventEmitter inheritance (Poller) and request data handling I thought could be convenient