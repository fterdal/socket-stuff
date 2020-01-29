const net = require("net")
const uuidv4 = require("uuid/v4")
const { PORT } = require("./utils")

// Useful: https://stackoverflow.com/questions/6805432/how-to-uniquely-identify-a-socket-with-node-js
const server = net.createServer(socket => {
  const id = uuidv4()
  socket.write("I hear you!\n")
  socket.pipe(socket)
  socket.on("close", () => {
    console.log("🏢 client left the building")
  })
  socket.on("data", data => {
    console.log("🏢 DATA from client:", data.toString())
    // console.log("🏢 client id:", )
  })
  // socket.end()
})

server.listen(PORT)
