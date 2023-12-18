const app = require('./loader/server.js')


// import server config
const config = require('./config')
const port = config.server.port


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})