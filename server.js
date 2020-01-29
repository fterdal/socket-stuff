const net = require("net")
const uuidv4 = require("uuid/v4")
const { PORT } = require("./utils")

// Useful: https://stackoverflow.com/questions/6805432/how-to-uniquely-identify-a-socket-with-node-js
const server = net.createServer(socket => {
  if (!socket.id) {
    const id = uuidv4()
    socket.id = id
  }
  socket.write(`Hey Client! Your id is ${socket.id}\n`)
  socket.pipe(socket)
  socket.on("close", () => {
    console.log(`🏢 client ${socket.id} left the building`)
  })
  socket.on("data", data => {
    console.log("🏢 DATA from client:", data.toString())
    // console.log("🏢 client id:", )
  })
  // socket.end()
})

server.listen(PORT)
