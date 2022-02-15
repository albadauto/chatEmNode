const { serverHttp } = require("./http");
require('./webSocket')


serverHttp.listen(8080, () => console.log('Tudo certo!'))


/**
 * 
 * RESUMO:
 * 
 * WebSocket é um tipo de serviço de chat rapido e facil
 * Funciona assim, ele é orientado a eventos
 * Você cria eventos para emitir (emit) e para ouvir (on)
 * A cada evento, você pode transmitir uma mensagem ou para aplicação inteira (io) ou para apenas aquele grupo de evento (socket)
 * 
 */