const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./routes/user')
const itemRoutes = require('./routes/item')

app.use(cors())
  .use(bodyParser.json())
  .use(userRoutes)
  .use(itemRoutes)

app.set('port', process.env.PORT || 8081)
app.listen(process.env.PORT || 8081, () => console.log('listen on port 8081'))
