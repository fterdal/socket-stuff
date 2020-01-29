const net = require("net")
const { PORT } = require("./utils")

const client = new net.Socket()

// client.connect({ port: PORT }, () => {
//   console.log("connecting")
// })

// const PORT = 8080
client.connect(PORT, "localhost", (err, conn) => {
  console.log("Connected to port:", PORT)
  client.write("Hey server, what's up?")
})
