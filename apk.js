const express = require('express')
cosnt app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res)) => 
{
    res.send('Hello world')
}
server = app.listen(3000)