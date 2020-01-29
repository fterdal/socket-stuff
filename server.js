const net = require("net")

const server = net.createServer(socket => {
  console.log(socket)
  socket.write("I hear you!\n")
  socket.pipe(socket)
  // socket.end()
})

const PORT = 3030
server.listen(PORT)
