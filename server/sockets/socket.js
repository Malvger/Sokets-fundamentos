const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
            console.log('Usuario desconectado');
        })
        //escuchar cliente 
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'Todo Salio Bien'
            //     });

        // } else {
        //     callback({
        //         resp: 'Todo Salio Mal'
        //     });
        // }
    });

});