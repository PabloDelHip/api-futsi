const express = require('express')
var cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.leaguesPath = '/api/leagues'
        //Middlewares
        this.middlewares()
        //Rutas de la aplicacion
        this.routes()
    }

    routes() {
        this.app.use(this.leaguesPath, require('../routes/leagues.js'))
    }

    middlewares() {

        //CORS
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json())

        //Direccion Publica
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corrriendo en puerto', this.port)
        })
    }

}

module.exports = Server;