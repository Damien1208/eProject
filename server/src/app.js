const   express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/', function(req, res) {
    res.send('my ecommerce app')
})

app.set('port', process.env.PORT || 8081)
app.listen(process.env.PORT || 8081, () => console.log('listen on port 8081'))