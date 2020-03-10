const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')

app.use(cors())
  .use(bodyParser.json())
  .use(router)

app.set('port', process.env.PORT || 8081)
app.listen(process.env.PORT || 8081, () => console.log('listen on port 8081'))
