const net = require("net")
const { PORT } = require("./utils")

const socket = new net.Socket()

// const PORT = 8080
const client = socket.connect(PORT, "localhost", () => {
  console.log("💻 Connected to port:", PORT)
  socket.write("Hey server, what's up?")
})
client.on("data", data => {
  console.log("💻 Data from server:", data.toString())
})
client.on("error", error => {
  console.log("💻 Error on Client:", error)
})
client.on("close", () => {
  console.log("💻 Connection closed")
})