const express = require('express')
const app = express()
const http = require('http')
const { Server }= require('socket.io') //Usa a classe server do socket io
const serverHttp = http.createServer(app)
const io = new Server(serverHttp)
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/chat', (req,res) => {
    res.render('chat')
})

module.exports = {
    io: io,
    serverHttp:serverHttp
}