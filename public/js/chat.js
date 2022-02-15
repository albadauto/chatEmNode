const socket = io()

//Pega dados pela url
const urlSearch = new URLSearchParams(window.location.search) 
const username = urlSearch.get("username")
const room = urlSearch.get("select_room")


//emit => emitir alguma informação
//on => para escutar alguma informação

socket.emit("select_room", {
    username,
    room
})//Emite um evento Select room, com o username e que sala ele esta

document.getElementById("message_input").addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        const message = event.target.value //recebe a mensagem
        const data = {
            room,
            message,
            username
        }
        socket.emit("message", data) //Emite informações
        event.target.value = "" //Limpa caixa de texto

    }
})

socket.on("message", data => {
    const messageDiv = document.getElementById("messageDiv")

    messageDiv.innerHTML += `
    <label for="" id="message_output"><strong> ${data.username}</strong> Disse: ${data.text}</label>
    <br>` //Insere um html a cada mensagem nova
})