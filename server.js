const data = require("./db.json")
const jsonServer = require("json-server")
const server = jsonServer.create()
const route = jsonServer.route(data)
const middlewares = jsonServer.defaults()
const port = process.env.port || 4000

server.use(middlewares)
server.use(route)

server.listen(port)
