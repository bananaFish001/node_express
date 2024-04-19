const http = require('http')
const { homedir } = require('os')

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('here is our short history')
    }
    else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href = "/">back home</a>
    `)
    }
})

server.listen(5000)