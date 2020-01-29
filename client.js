const net = require("net")
const { PORT } = require("./utils")

const client = new net.Socket()

// client.connect({ port: PORT }, () => {
//   console.log("connecting")
// })

// const PORT = 8080
const socket = client.connect(PORT, "localhost", () => {
  console.log("💻 Connected to port:", PORT)
  client.write("Hey server, what's up?")
})
socket.on("data", data => {
  console.log("💻 Data from server:", data.toString())
  console.log("💻 Data from server:", data.toString())
})
