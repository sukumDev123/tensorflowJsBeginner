import express from 'express';
import path from 'path';
import socket from 'socket.io';
const app = express();


app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.get('/' , (req,res) => {
    res.render('./views/index' , {
        test : 'test'
    } )
})

let server = app.listen(3000);
const io = socket(server);
async function  newConnection(socket) {
    console.log('socker connected : ' + socket.id)
    socket.on('mouse' , data => {
        socket.broadcast.emit('mouse',data)
    })
}

io.sockets.on('connection', newConnection)