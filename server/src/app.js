const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  router = require('./router')

app.use(cors())
  .use(bodyParser.json())
  .use(router)

app.set('port', process.env.PORT || 8081)
app.listen(process.env.PORT || 8081, () => console.log('listen on port 8081'))
