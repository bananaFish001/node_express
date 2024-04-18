// importing a module from fs
const { readFileSync, writeFileSync } = require("fs")
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' } // flag is added to make sure new content is appended instead of being overwrittern
)
console.log('done')
