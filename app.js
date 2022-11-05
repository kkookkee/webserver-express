require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const app = express()

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'App',
        apellido: 'Node y express'
    })
})
app.get('/generic', function (req, res) {
    res.render('generic',{
    })
})
app.get('/elements', function (req, res) {
    res.render('elements',{
    })
})
app.get('/*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
  })

app.listen(process.env.PORT)