const net = require("net")
const uuidv4 = require("uuid/v4")
const { PORT } = require("./utils")

const sessions = new Set()

const server = net.createServer(socket => {
  if (!socket.id) {
    const id = uuidv4()
    socket.id = id
  }
  sessions.add(socket.id)
  socket.write(`Hey Client! Your id is ${socket.id}\n`)
  socket.pipe(socket)
  socket.on("close", () => {
    console.log(`🏢 client ${socket.id} left the building`)
    sessions.delete(socket.id)
  })
  socket.on("data", data => {
    console.log("🏢 DATA from client:", data.toString())
    // console.log("🏢 client id:", )
  })
  // socket.end()
})

// setInterval(() => {
//   console.log("🏢 Sessions:", sessions)
// }, 1000)

server.listen(PORT)
