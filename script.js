const bQuotes = ['“Success is not final; failure is not fatal: it is the courage to continue that counts.” – Winston Churchill', '“Play by the rules, but be ferocious.” – Phil Knight', '“Business opportunities are like buses, there’s always another one coming.” – Richard Branson', '“Every problem is a gift—without problems we would not grow.” – Anthony Robbins', '“You only have to do a few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett'];

const generateRandomQuote = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(generateRandomQuote(bQuotes));