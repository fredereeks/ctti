const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== "production"
const hostname = process.env.NODE_ENV !== "production" ? "localhost" : "https://ctti.ng"
const port = process.env.PORT || "5566"

const app = next({dev, hostname, port})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Be sure to pass 'true' as the second argument of 'url.parse' as this tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            const {pathname, query} = parsedUrl
            
            if(pathname === "/a"){
                await app.render(req, res, "/a", query)
            } else if(pathname === "/b"){
                await app.render(req, res, "/b", query)
            } else {
                await handle(req, res, parsedUrl)
            }
        } catch (error) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end("Internal server error")
        }
    })
    .once('error', (err) => {
        console.error('Server Creation Error at: ', req.url, err)
        process.exit(1)
    })
    .listen(port, (err) => {
        if(err) throw err;
        console.log(` > Ready on http://${hostname}:${port}`)
    })
})