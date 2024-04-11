const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('hello')
})

app.get('/index', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}/`)
})