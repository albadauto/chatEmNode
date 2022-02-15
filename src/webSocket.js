const { io } = require('./http')

io.on("connection", (socket) => {
    socket.on("select_room", (data) => {
        socket.join(data.room) //Juntar com a sala
        const users = [
            'room', data.room,
            'username', data.username,
            'socket_id', socket.id
        ]//Recebe os dados do evento criado no arquivo (chat js)

        //Para salvar as mensagens
        const userInRoom = users.find((user) => user.username === data.username && user.room === data.room) //Procura no array se existe o username na sala e se a pessoa esta na sala

        if(userInRoom){ //Caso tenha dados no array
            userInRoom.socket_id = socket.id //O Usuario só irá mudar o id
        }else{
            users.push({
                room:data.room,
                username: data.username,
                socket_id: socket.id
            }) //Irá inserir os dados e o username novamente
        }

        socket.on("message", data => { //escuta a mensagem que foi enviada
            //Enviar para usuarios da sala
            const messages = {
                room: data.room,
                username: data.username,
                text: data.message,
                createdAt: new Date()
            }
            io.to(data.room).emit("message", messages) //Emite a mensagem com novas informações e na sala que foi criada

            //io.to para dizer para onde vai emitir(emit) a mensagem criada
            
        })

    } )
})