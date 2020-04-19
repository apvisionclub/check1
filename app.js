let http = require('http')

let server = http.createServer(function(req, res) {

    
    let responseHeaders = {
        'Content-Type': 'text/plain'
    }
   
    res.writeHead(200, responseHeaders)

    res.write("Hello world")
    res.end()

})

let port = 8080

server.listen(port, function() {
    console.log(`Server listening on port ${port}...`)
})
