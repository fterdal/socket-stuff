const net = require("net")
const { PORT } = require("./utils")

const server = net.createServer(socket => {
  socket.write("I hear you!\n")
  socket.pipe(socket)
  socket.on("close", () => {
    console.log("client left the building")
  })
  // socket.end()
})

server.listen(PORT)
