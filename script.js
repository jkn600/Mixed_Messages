const randQuotes = {
    part1: ['Success is not final, ', 'Play by the rules, ', 'Business opportunities are like buses, ', 'Every problem is a gift, ', 'You only have to do a few things right in your life, '],
    part2: ['failure is not fatal, '],
    part3: ['it is the courage to continue that counts.', 'but be ferocious.', ' there’s always another one coming.', ' without problems we would not grow.', ' so long as you don’t do too many things wrong.'],
    part4: [' – Winston Churchill', ' – Phil Knight', ' – Richard Branson', ' – Anthony Robbins', ' – Warren Buffett']
}

const generateRandomQuote = obj => {
    const currentArrays = Object.values(obj);
    let finalString = '';
    for(let i = 0; i < 4; i++){
        finalString += currentArrays[i][Math.floor(Math.random() * currentArrays[i].length)];
    }
    console.log(finalString);
}

generateRandomQuote(randQuotes);