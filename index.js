let express = require('express')
let app = express()
let http = require('http')
let server = http.createServer(app)
let { Server } = require('socket.io')
let io = new Server(server)

app.get('/show', (req, res) => {
	if(req.hostname == 'localhost') res.sendFile(__dirname + '/show.html')
	else res.sendFile(__dirname + '/play.html')
})

app.get('/', (req, res) => res.sendFile(__dirname + '/play.html'))

io.on('connection', socket => socket.on('input', data => io.emit('draw', data)))

server.listen(80, () => {})